// Scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    }
  });
}, observerOptions);

document.querySelectorAll(".scroll-animate").forEach((el) => {
  observer.observe(el);
});

// Back to top button
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 300) {
    backToTop.classList.add("visible");
  } else {
    backToTop.classList.remove("visible");
  }
});

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Navigation scroll effect
const nav = document.querySelector("nav");
if (nav) {
  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
      nav.classList.add("scrolled");
    } else {
      nav.classList.remove("scrolled");
    }
  });
}

// Safe fetch for header and footer
fetch("/components/footer.html")
  .then((response) => response.text())
  .then((data) => {
    const footerElement = document.getElementById("footer");
    if (footerElement) {
      footerElement.innerHTML = data;
    }
  })
  .catch((error) => {
    console.log("Footer component not found:", error);
  });

fetch("/components/header.html")
  .then((response) => response.text())
  .then((data) => {
    const headerElement = document.getElementById("header");
    if (headerElement) {
      headerElement.innerHTML = data;
    }
  })
  .catch((error) => {
    console.log("Header component not found:", error);
  });

function renderArticleHeader({
  category,
  title,
  author,
  date,
  readTime,
  views,
  excerpt,
}) {
  return `
      <header class="article-header">
        <div class="article-header-container fade-in-up">
          <div class="article-category">${category}</div>
          <h1 class="article-title orbitron">
            ${title}
          </h1>
          <div class="article-meta">
            <div class="meta-item">
              <div class="author-avatar">${author.charAt(0).toUpperCase()}</div>
              <span>${author}</span>
            </div>
            <div class="meta-item">
              <span>📅 ${date}</span>
            </div>
            <div class="meta-item">
              <span>🕒 ${readTime}</span>
            </div>
            <div class="meta-item">
              <span>👁️ ${views} views</span>
            </div>
          </div>
          <p class="article-excerpt">
            ${excerpt}
          </p>
        </div>
      </header>
    `;
}
