import { gsap } from 'gsap/gsap-core';
const navLi = nvBar.querySelectorAll('li');

// gsap.from(navLi, {
//   x: 500,
//   opacity: 0,
//   stagger: 0.2,
//   ease: 'expoScale',
//   duration: 2,
//   delay: 4,
// });

gsap.from('.in', {
  y: 100,
  opacity: 0,
  duration: 1,
  ease: 'bounce.inOut',
  delay: 5,
});
gsap.from('.gh', {
  y: 100,
  opacity: 0,
  duration: 1,
  ease: 'bounce.inOut',
  delay: 6,
});
