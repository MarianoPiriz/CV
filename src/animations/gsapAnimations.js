import { gsap } from 'gsap/gsap-core';

gsap.from('.in', {
  y: 100,
  opacity: 0,
  duration: 0.5,
  ease: 'bounce.inOut',
  delay: 5,
});
gsap.from('.gh', {
  y: 100,
  opacity: 0,
  duration: 0.5,
  ease: 'bounce.inOut',
  delay: 6,
});
