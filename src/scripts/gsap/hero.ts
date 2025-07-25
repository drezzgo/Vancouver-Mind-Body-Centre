import gsap from 'gsap';

  const backdrop = document.getElementById('contact-modal-backdrop');
  const modal    = document.getElementById('contact-modal');
  const btns     = document.querySelectorAll('#dialog');
  const closeBtn = document.getElementById('modal-close');
  const form     = document.getElementById('contact-form');

  let tl;
  function openModal() {
    backdrop.classList.remove('hidden');
    modal.classList.remove('hidden');
    document.body.classList.add('overflow-hidden');

    // GSAP animación
    tl = gsap.timeline()
      .fromTo(backdrop, { opacity: 0 }, { opacity: 1, duration: 0.2 })
      .fromTo(modal.querySelector('div'), { y: -50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.3 });
  }

  function closeModal() {
    if (tl) tl.reverse().then(() => {
      backdrop.classList.add('hidden');
      modal.classList.add('hidden');
      document.body.classList.remove('overflow-hidden');
    });
  }

  // Abrir desde cualquier botón con id="dialog"
  btns.forEach(btn => btn.addEventListener('click', openModal));
  closeBtn.addEventListener('click', closeModal);
  backdrop.addEventListener('click', closeModal);


  // Cerrar con Escape
  window.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal();
  });