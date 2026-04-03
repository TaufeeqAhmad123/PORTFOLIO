/* ============================================
   PORTFOLIO — Main JavaScript
   Author: Taufeeq Ahmad
   ============================================ */

// ─── Wait for DOM ────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  // Initialize Lucide icons
  if (typeof lucide !== "undefined") {
    lucide.createIcons();
  }

  initNavbar();
  initThemeToggle();
  initTypingAnimation();
  initScrollReveal();
  initParticles();
  initContactForm();
  initBackToTop();
  initCountUp();
  initCardTilt();
  initSectionParticles();
});

/* ============================================
   SECTION PARTICLES (Experience, etc.)
   ============================================ */
function initSectionParticles() {
  const canvas = document.getElementById('experience-particles');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let particles = [];

  function resize() {
    const section = canvas.parentElement;
    canvas.width = section.offsetWidth;
    canvas.height = section.offsetHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  class Particle {
    constructor() { this.reset(); }
    reset() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.size = Math.random() * 2 + 0.5;
      this.speedX = (Math.random() - 0.5) * 0.3;
      this.speedY = (Math.random() - 0.5) * 0.3;
      this.opacity = Math.random() * 0.35 + 0.08;
    }
    update() {
      this.x += this.speedX;
      this.y += this.speedY;
      if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
      if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
    }
    draw() {
      const theme = document.documentElement.getAttribute('data-theme');
      const color = theme === 'dark'
        ? `rgba(160, 140, 255, ${this.opacity})`
        : `rgba(100, 80, 200, ${this.opacity * 0.5})`;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = color;
      ctx.fill();
    }
  }

  const count = Math.min(40, Math.floor((canvas.width * canvas.height) / 25000));
  for (let i = 0; i < count; i++) particles.push(new Particle());

  function connectParticles() {
    const maxDist = 110;
    const theme = document.documentElement.getAttribute('data-theme');
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < maxDist) {
          const opacity = (1 - dist / maxDist) * 0.12;
          const color = theme === 'dark'
            ? `rgba(160, 140, 255, ${opacity})`
            : `rgba(100, 80, 200, ${opacity * 0.5})`;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = color;
          ctx.lineWidth = 0.6;
          ctx.stroke();
        }
      }
    }
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => { p.update(); p.draw(); });
    connectParticles();
    requestAnimationFrame(animate);
  }
  animate();
}

/* ============================================
   3D CARD TILT EFFECT
   ============================================ */
function initCardTilt() {
  const tiltCards = document.querySelectorAll('.project-card, .skill-category');
  const maxTilt = 8; // degrees

  tiltCards.forEach((card) => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;  // cursor X inside card
      const y = e.clientY - rect.top;   // cursor Y inside card
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      // Normalise -1 to 1
      const rotateY = ((x - centerX) / centerX) * maxTilt;
      const rotateX = ((centerY - y) / centerY) * maxTilt;

      card.style.transition = 'transform 0.1s ease';
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.03, 1.03, 1.03)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transition = 'transform 0.5s ease';
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    });
  });
}

/* ============================================
   NAVBAR
   ============================================ */
function initNavbar() {
  const navbar = document.getElementById("navbar");
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("nav-menu");
  const navLinks = document.querySelectorAll(".nav-link");

  // Create overlay element for mobile menu
  const overlay = document.createElement("div");
  overlay.classList.add("nav-overlay");
  document.body.appendChild(overlay);

  // Scroll effect — add/remove "scrolled" class
  const handleScroll = () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
    updateActiveLink();
  };
  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll(); // run on load

  // Hamburger toggle
  const toggleMenu = () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("open");
    overlay.classList.toggle("visible");
    document.body.style.overflow = navMenu.classList.contains("open")
      ? "hidden"
      : "";
  };

  hamburger.addEventListener("click", toggleMenu);
  overlay.addEventListener("click", toggleMenu);

  // Close menu on link click
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (navMenu.classList.contains("open")) {
        toggleMenu();
      }
    });
  });

  // Active link highlight based on scroll position
  function updateActiveLink() {
    const sections = document.querySelectorAll("section[id]");
    const scrollY = window.scrollY + 150;

    sections.forEach((section) => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute("id");

      if (scrollY >= top && scrollY < top + height) {
        navLinks.forEach((link) => {
          link.classList.remove("active");
          if (link.getAttribute("data-section") === id) {
            link.classList.add("active");
          }
        });
      }
    });
  }
}

/* ============================================
   THEME TOGGLE (Dark / Light)
   ============================================ */
function initThemeToggle() {
  const toggleBtn = document.getElementById("theme-toggle");
  const html = document.documentElement;

  // Restore saved preference
  const savedTheme = localStorage.getItem("theme") || "dark";
  html.setAttribute("data-theme", savedTheme);

  toggleBtn.addEventListener("click", () => {
    // Play glow animation
    toggleBtn.classList.add("toggling");
    setTimeout(() => toggleBtn.classList.remove("toggling"), 600);

    const current = html.getAttribute("data-theme");
    const next = current === "dark" ? "light" : "dark";
    html.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);

    // Re-create Lucide icons (they re-render correctly)
    if (typeof lucide !== "undefined") {
      lucide.createIcons();
    }
  });
}

/* ============================================
   TYPING ANIMATION
   ============================================ */
function initTypingAnimation() {
  const typingEl = document.getElementById("typing-text");
  if (!typingEl) return;

  const phrases = [
    "App Developer",
    "Flutter Developer",
    "Mobile UI Enthusiast",
    "Clean Code Advocate",
  ];

  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const typeSpeed = 80;
  const deleteSpeed = 40;
  const pauseEnd = 2000;
  const pauseStart = 500;

  function type() {
    const currentPhrase = phrases[phraseIndex];

    if (!isDeleting) {
      // Typing forward
      typingEl.textContent = currentPhrase.substring(0, charIndex + 1);
      charIndex++;

      if (charIndex === currentPhrase.length) {
        isDeleting = true;
        setTimeout(type, pauseEnd);
        return;
      }
      setTimeout(type, typeSpeed);
    } else {
      // Deleting
      typingEl.textContent = currentPhrase.substring(0, charIndex - 1);
      charIndex--;

      if (charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        setTimeout(type, pauseStart);
        return;
      }
      setTimeout(type, deleteSpeed);
    }
  }

  // Start after a brief delay
  setTimeout(type, 1000);
}

/* ============================================
   SCROLL REVEAL
   ============================================ */
function initScrollReveal() {
  const revealElements = document.querySelectorAll(
    ".reveal-up, .reveal-left, .reveal-right",
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      root: null,
      rootMargin: "0px 0px -80px 0px",
      threshold: 0.15,
    },
  );

  revealElements.forEach((el) => observer.observe(el));
}

/* ============================================
   PARTICLE BACKGROUND (Canvas)
   ============================================ */
function initParticles() {
  const canvas = document.getElementById("particles-canvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  let particles = [];
  let animationId;

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener("resize", resize);

  class Particle {
    constructor() {
      this.reset();
    }

    reset() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.size = Math.random() * 2 + 0.5;
      this.speedX = (Math.random() - 0.5) * 0.4;
      this.speedY = (Math.random() - 0.5) * 0.4;
      this.opacity = Math.random() * 0.4 + 0.1;
    }

    update() {
      this.x += this.speedX;
      this.y += this.speedY;

      if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
      if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
    }

    draw() {
      const theme = document.documentElement.getAttribute("data-theme");
      const color =
        theme === "dark"
          ? `rgba(160, 140, 255, ${this.opacity})`
          : `rgba(100, 80, 200, ${this.opacity * 0.5})`;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = color;
      ctx.fill();
    }
  }

  // Create particles (limit count for performance)
  const count = Math.min(
    60,
    Math.floor((canvas.width * canvas.height) / 20000),
  );
  for (let i = 0; i < count; i++) {
    particles.push(new Particle());
  }

  function connectParticles() {
    const maxDist = 120;
    const theme = document.documentElement.getAttribute("data-theme");

    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < maxDist) {
          const opacity = (1 - dist / maxDist) * 0.15;
          const color =
            theme === "dark"
              ? `rgba(160, 140, 255, ${opacity})`
              : `rgba(100, 80, 200, ${opacity * 0.5})`;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = color;
          ctx.lineWidth = 0.6;
          ctx.stroke();
        }
      }
    }
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach((p) => {
      p.update();
      p.draw();
    });
    connectParticles();
    animationId = requestAnimationFrame(animate);
  }

  animate();
}

/* ============================================
   COUNT-UP ANIMATION
   ============================================ */
function initCountUp() {
  const counters = document.querySelectorAll(".stat-number[data-count]");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseInt(el.getAttribute("data-count"), 10);
          animateCount(el, target);
          observer.unobserve(el);
        }
      });
    },
    { threshold: 0.5 },
  );

  counters.forEach((c) => observer.observe(c));

  function animateCount(el, target) {
    let current = 0;
    const duration = 1500;
    const step = target / (duration / 16);

    function tick() {
      current += step;
      if (current >= target) {
        el.textContent = target;
        return;
      }
      el.textContent = Math.floor(current);
      requestAnimationFrame(tick);
    }
    tick();
  }
}

/* ============================================
   CONTACT FORM
   ============================================ */
function initContactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;

  // Add placeholder attributes for :placeholder-shown CSS
  const inputs = form.querySelectorAll("input, textarea");
  inputs.forEach((input) => {
    input.setAttribute("placeholder", " ");
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("form-name");
    const email = document.getElementById("form-email");
    const message = document.getElementById("form-message");
    const submitBtn = document.getElementById("submit-btn");

    let isValid = true;

    // Clear errors
    clearErrors();

    // Validate Name
    if (name.value.trim().length < 2) {
      showError(
        "name-error",
        "Please enter your name (at least 2 characters).",
      );
      isValid = false;
    }

    // Validate Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value.trim())) {
      showError("email-error", "Please enter a valid email address.");
      isValid = false;
    }

    // Validate Message
    if (message.value.trim().length < 10) {
      showError(
        "message-error",
        "Message should be at least 10 characters long.",
      );
      isValid = false;
    }

    if (!isValid) return;

    // Send to FormSubmit.co via fetch
    submitBtn.classList.add("loading");
    submitBtn.disabled = true;

    // Set reply-to so you can directly reply to the sender
    const replyToField = form.querySelector('input[name="_replyto"]');
    if (replyToField) replyToField.value = email.value.trim();

    const formData = new FormData(form);

    fetch(form.action, {
      method: "POST",
      body: formData,
      headers: { 'Accept': 'application/json' }
    })
    .then(response => {
      submitBtn.classList.remove("loading");
      submitBtn.disabled = false;

      const btnText = submitBtn.querySelector(".btn-text");

      if (response.ok) {
        // Success feedback
        btnText.textContent = "✓ Message Sent!";
        submitBtn.style.background = "linear-gradient(135deg, #22c55e, #16a34a)";
        form.reset();

        setTimeout(() => {
          btnText.textContent = "Send Message";
          submitBtn.style.background = "";
        }, 3000);
      } else {
        // Error feedback
        btnText.textContent = "✗ Failed — try again";
        submitBtn.style.background = "linear-gradient(135deg, #ef4444, #dc2626)";

        setTimeout(() => {
          btnText.textContent = "Send Message";
          submitBtn.style.background = "";
        }, 3000);
      }
    })
    .catch(() => {
      submitBtn.classList.remove("loading");
      submitBtn.disabled = false;
      const btnText = submitBtn.querySelector(".btn-text");
      btnText.textContent = "✗ Network error";
      submitBtn.style.background = "linear-gradient(135deg, #ef4444, #dc2626)";

      setTimeout(() => {
        btnText.textContent = "Send Message";
        submitBtn.style.background = "";
      }, 3000);
    });
  });

  function showError(id, message) {
    const el = document.getElementById(id);
    if (el) el.textContent = message;
  }

  function clearErrors() {
    document
      .querySelectorAll(".form-error")
      .forEach((e) => (e.textContent = ""));
  }
}

/* ============================================
   BACK TO TOP BUTTON
   ============================================ */
function initBackToTop() {
  const btn = document.getElementById("back-to-top");
  if (!btn) return;

  window.addEventListener(
    "scroll",
    () => {
      if (window.scrollY > 500) {
        btn.classList.add("visible");
      } else {
        btn.classList.remove("visible");
      }
    },
    { passive: true },
  );

  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}
