const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("mainNav");

if (menuBtn && nav) {
  menuBtn.addEventListener("click", () => {
    nav.classList.toggle("show");
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => nav.classList.remove("show"));
  });
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

const contactPanel = document.getElementById("contactPanel");
const contactRevealBtn = document.getElementById("contactRevealBtn");
const contactNavLink = document.getElementById("contactNavLink");

if (contactPanel) {
  contactPanel.hidden = true;
}

if (contactRevealBtn) {
  contactRevealBtn.setAttribute("aria-expanded", "false");
  contactRevealBtn.textContent = "Open Contact Details";
}

function openContactPanel() {
  if (!contactPanel) {
    return;
  }

  contactPanel.hidden = false;
  if (contactRevealBtn) {
    contactRevealBtn.setAttribute("aria-expanded", "true");
    contactRevealBtn.textContent = "Contact Details Open";
  }

  contactPanel.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
}

if (contactRevealBtn) {
  contactRevealBtn.addEventListener("click", openContactPanel);
}

if (contactNavLink) {
  contactNavLink.addEventListener("click", () => {
    openContactPanel();
  });
}

function showMessage(elementId, text) {
  const el = document.getElementById(elementId);
  if (el) {
    el.textContent = text;
  }
}

const donateForm = document.getElementById("donateForm");
if (donateForm) {
  donateForm.addEventListener("submit", (event) => {
    event.preventDefault();
    showMessage("donateMsg", "Thank you! Our team will contact you for secure donation details.");
    donateForm.reset();
  });
}

const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    showMessage("contactMsg", "Message sent successfully. We will get back to you soon.");
    contactForm.reset();
  });
}
