// Mobile Menu Toggle
const mobileToggle = document.getElementById("mobileToggle");
const navMenu = document.getElementById("navMenu");

mobileToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

// Close mobile menu when clicking a link
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
  });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});

// scroll effect header
window.addEventListener("scroll", () => {
  const header = document.querySelector(".header");
  if (window.scrollY > 50) {
    header.style.background = "rgba(0, 0, 0, 0.95)";
  } else {
    header.style.background = "rgba(0, 0, 0, 0.9)";
  }
});

// Animate progress bars on scroll
const observerOptions = {
  threshold: 0.5,
  rootMargin: "0px 0px -100px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const progressBars = entry.target.querySelectorAll(".progress-bar");
      progressBars.forEach((bar) => {
        const width = bar.getAttribute("data-width");
        setTimeout(() => {
          bar.style.width = width + "%";
        }, 300);
      });
    }
  });
}, observerOptions);

// Observe tech stack section
const techStackSection = document.querySelector(".tech-stack");
if (techStackSection) {
  observer.observe(techStackSection);
}

//typing effect
const aboutTitle = document.querySelector(".about-title");
if (aboutTitle) {
  aboutTitle.addEventListener("mouseenter", () => {
    aboutTitle.style.textShadow = "0 0 30px rgba(251, 199, 71, 0.8)";
  });
  aboutTitle.addEventListener("mouseleave", () => {
    aboutTitle.style.textShadow = "0 0 20px rgba(251, 199, 71, 0.5)";
  });
}


// contact me form
const form = document.getElementById("contactForm");
const popup = document.getElementById("formSuccessPopup");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // prevent default submit

  // create FormData for Netlify
  const formData = new FormData(form);

  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(formData).toString(),
  })
    .then(() => {
      popup.classList.remove("hidden"); //message sent popup
      popup.classList.add("show");
      form.reset();

      setTimeout(() => {
        popup.classList.remove("show");
        popup.classList.add("hidden");
      }, 4000);
    })
    .catch(() => alert("Oops! Something went wrong"));
});

//footer
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

// Show/hide back to top button based on scroll position
window.addEventListener("scroll", function () {
  const backToTopBtn = document.querySelector(".back-to-top");
  if (window.pageYOffset > 300) {
    backToTopBtn.style.opacity = "1";
    backToTopBtn.style.visibility = "visible";
  } else {
    backToTopBtn.style.opacity = "0";
    backToTopBtn.style.visibility = "hidden";
  }
});

// Initialize back to top button visibility
document.addEventListener("DOMContentLoaded", function () {
  const backToTopBtn = document.querySelector(".back-to-top");
  backToTopBtn.style.opacity = "0";
  backToTopBtn.style.visibility = "hidden";
  backToTopBtn.style.transition = "opacity 0.3s ease, visibility 0.3s ease";

  // Easter Egg
  //I bet not many people will be able to find it. If you did, congratulations! you're one of the few!"
  const characterImg = document.querySelector(".character-space");
  const easterPopup = document.getElementById("easterEggPopup");

  let clickCount = 0;
  let timer = null;

  characterImg.addEventListener("click", () => {
    clickCount++;
    console.log(clickCount);

    if (clickCount === 2) {
      easterPopup.classList.remove("hidden");
      easterPopup.classList.add("show");

      setTimeout(() => {
        easterPopup.classList.remove("show");
        easterPopup.classList.add("hidden");
      }, 4000);

      clickCount = 0;
      clearTimeout(timer);
    }

    clearTimeout(timer);
    timer = setTimeout(() => {
      clickCount = 0;
    }, 1500);
  });
});

//The end of script.