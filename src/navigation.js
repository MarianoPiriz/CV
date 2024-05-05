import { gsap } from 'gsap/gsap-core';

const nav = document.querySelectorAll('[data-menu="closed"]');
const TL = gsap.timeline();

nav.forEach((navItem) => {
  navItem.addEventListener('click', (e) => {
    if (e.target.matches('.logoBtn')) {
      e.preventDefault();
    }
    if (e.target.matches('[data-menu="closed"]')) {
      nav.forEach((navItem) => {
        navItem.dataset.menu = 'open';
      });
      TL.to('.navBar', {
        top: '0%',
        duration: 1,
        ease: 'exposcale',
      }).fromTo(
        '.navLnk',
        {
          y: -200,
        },
        { y: 0, ease: 'expoScale', stagger: 0.1 }
      );
    } else {
      TL.to('.navLnk', {
        y: -200,
        ease: 'expoScale',
        stagger: 0.1,
      }).to('.navBar', {
        top: '-100%',
        ease: 'exposcale',
        duration: 0.5,
      });
      nav.forEach((navItem) => {
        navItem.dataset.menu = 'closed';
      });
    }
  });
});
