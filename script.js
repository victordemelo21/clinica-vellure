const nav = document.querySelector('.nav');
const progress = document.querySelector('.progress');
const toggle = document.querySelector('.nav-toggle');
const panel = document.querySelector('.nav-panel');

function handleScroll() {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  const percent = max > 0 ? (window.scrollY / max) * 100 : 0;
  if (progress) progress.style.width = `${percent}%`;
  nav?.classList.toggle('is-scrolled', window.scrollY > 20);
}
window.addEventListener('scroll', handleScroll);
handleScroll();

toggle?.addEventListener('click', () => panel?.classList.toggle('active'));
document.querySelectorAll('.nav-panel a').forEach((link) => link.addEventListener('click', () => panel?.classList.remove('active')));

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.16 });

document.querySelectorAll('.reveal').forEach((item) => revealObserver.observe(item));

document.querySelectorAll('.faq-item').forEach((item) => {
  item.addEventListener('click', () => item.classList.toggle('active'));
});
