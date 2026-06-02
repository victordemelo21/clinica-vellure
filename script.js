const nav = document.querySelector(".nav");
const progress = document.querySelector(".progress");
const toggle = document.querySelector(".nav-toggle");
const panel = document.querySelector(".nav-panel");
const heroArt = document.querySelector(".hero-art");

function handleScroll() {
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  const percent = maxScroll > 0 ? (window.scrollY / maxScroll) * 100 : 0;

  if (progress) {
    progress.style.width = `${percent}%`;
  }

  nav?.classList.toggle("is-scrolled", window.scrollY > 20);
}

window.addEventListener("scroll", handleScroll);
handleScroll();

toggle?.addEventListener("click", () => {
  panel?.classList.toggle("active");
});

document.querySelectorAll(".nav-panel a").forEach((link) => {
  link.addEventListener("click", () => {
    panel?.classList.remove("active");
  });
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      entry.target.classList.add("visible");
      revealObserver.unobserve(entry.target);
    });
  },
  {
    threshold: 0.16,
  }
);

document.querySelectorAll(".reveal").forEach((item) => {
  revealObserver.observe(item);
});

document.querySelectorAll(".faq-item").forEach((item) => {
  item.addEventListener("click", () => {
    document.querySelectorAll(".faq-item").forEach((otherItem) => {
      if (otherItem !== item) {
        otherItem.classList.remove("active");
      }
    });

    item.classList.toggle("active");
  });
});

if (heroArt && window.matchMedia("(min-width: 900px)").matches) {
  window.addEventListener("mousemove", (event) => {
    const x = (event.clientX / window.innerWidth - 0.5) * 10;
    const y = (event.clientY / window.innerHeight - 0.5) * 10;

    heroArt.style.transform = `translate3d(${x}px, ${y}px, 0)`;
  });
}