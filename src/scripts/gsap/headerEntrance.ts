import { gsap } from 'gsap';

export const animateHeader = () => {
  console.log('✅ GSAP animateHeader loaded');

  const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 1 } });

  tl.from('header', {
    y: -50,
    opacity: 0,
  })
    .from('.logo-brand', {
      x: -40,
      opacity: 0,
    }, '<+=0.2')
    .from('nav a', {
      y: -10,
      opacity: 0,
      stagger: 0.1,
    }, '<');
};
