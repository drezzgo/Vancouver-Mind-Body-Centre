import gsap from "gsap";

window.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.getElementById('mobile-menu-btn')!;
  const closeBtn = document.getElementById('mobile-drawer-close')!;
  const drawer = document.getElementById('mobile-drawer')!;
  const overlay = document.getElementById('mobile-overlay')!;
  const navLinks = Array.from(document.querySelectorAll('#mobile-nav-links a'));

  let isOpen = false;

  function openMenu() {
    // slide-in drawer
    gsap.to(drawer, {
      x: 0,
      duration: 0.35,
      ease: 'power2.out'
    });
    // fade-in overlay + activar pointer-events
    gsap.to(overlay, {
      opacity: 1,
      duration: 0.3,
      onStart: () => { overlay.style.pointerEvents = 'auto'; }
    });
    // animar links
    gsap.fromTo(navLinks, {
      y: -10, opacity: 0
    }, {
      y: 0, opacity: 1,
      duration: 0.25,
      stagger: 0.1,
      delay: 0.15
    });

    document.body.classList.add("overflow-hidden");
    drawer.focus();
    isOpen = true;
  }

  function closeMenu() {
    gsap.to(drawer, {
      x: '-100%',
      duration: 0.35,
      ease: 'power2.in'
    });
    gsap.to(overlay, {
      opacity: 0,
      duration: 0.3,
      onComplete: () => { overlay.style.pointerEvents = 'none'; }
    });

    document.body.classList.remove("overflow-hidden");
    isOpen = false;
  }

  menuBtn.addEventListener('click', openMenu);
  closeBtn.addEventListener('click', closeMenu);
  overlay.addEventListener('click', closeMenu);

  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      closeMenu();
      const href = link.getAttribute('href');
      if (href?.startsWith('#')) {
        e.preventDefault();
        setTimeout(() => {
          document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
        }, 350);
      }
    });
  });

  window.addEventListener('keydown', (e) => {
    if (isOpen && (e.key === "Escape" || e.key === "Esc")) {
      closeMenu();
    }
  });
});
