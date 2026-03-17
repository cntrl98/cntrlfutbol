// ── NAV ──
const burger = document.getElementById('burger');
const mobileNav = document.getElementById('mobileNav');

if (burger && mobileNav) {
  burger.addEventListener('click', () => {
    burger.classList.toggle('open');
    mobileNav.classList.toggle('open');
  });

  // close on link click
  mobileNav.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      burger.classList.remove('open');
      mobileNav.classList.remove('open');
    });
  });
}

// ── ACTIVE NAV LINK ──
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a, .nav-dropdown-menu a').forEach(a => {
  if (a.getAttribute('href') === currentPage) a.classList.add('active');
});

// ── FAQ ACCORDION ──
document.querySelectorAll('.faq-q').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.closest('.faq-item');
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
    if (!isOpen) item.classList.add('open');
  });
});

// ── SCROLL REVEAL ──
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.08 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
