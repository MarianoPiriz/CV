import Lenis from '@studio-freight/lenis';
import { gsap } from 'gsap';
import { plane } from './three/objects.js';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

//const sections = document.querySelectorAll('section');

// const scrollingTimeLine = gsap.timeline({
//   scrollTrigger: {
//     trigger: '.sections',
//     markers: true,
//     start: 'top -10%',
//     end: 'bottom 0%',
//     scrub: 2,
//   },
// });

// scrollingTimeLine
//   .to('#about', {
//     y: -400,
//     duration: 3,
//     ease: 'expoScale',
//   })
//   .to('#education', {
//     y: -800,
//     duration: 1,
//     ease: 'expoScale',
//   });

// sections.forEach((section) => {
//   gsap.to(section, {
//     y: -400,
//     duration: 3,
//     scrollTrigger: {
//       trigger: section,
//       markers: true,
//       start: 'top -10%',
//       scrub: 1,
//       end: 'bottom 90%',
//     },
//     stagger: 5,
//   });
// });

const lenis = new Lenis({
  //   lerp: 0.1,
  //   smooth: true,
});

lenis.on('scroll', (e) => {});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

gsap.to('.heroImg', {
  y: -800,
  duration: 2,
  ease: 'expoScale',
  scrollTrigger: {
    triggeer: '#about',
    scrub: 1,
  },
});
gsap.to('.hero_HL', {
  y: -100,
  duration: 3,
  ease: 'expoScale',
  scrollTrigger: {
    trigger: '#about',
    scrub: 1,
  },
  delay: 2,
});
