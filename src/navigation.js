import { gsap } from 'gsap/gsap-core';
import { navMenu } from './controller/navmenu';
import { letsTalk } from './controller/letsTalk';
const linkList = document.querySelectorAll('.linkList > li> a');
const nvWrapper = document.querySelector('.nav_wrapper');
const smallDevices = window.matchMedia(
  'all and (min-width: 375px) and (max-width:1200px)'
);
console.log(linkList);

linkList.forEach((link) => {
  link.addEventListener('click', (e) => {
    console.log(e.target);
    if (smallDevices.matches) {
      console.log('Small Devices');
      if (!nvWrapper.classList.contains('open')) {
        nvWrapper.classList.add('open');
        nvWrapper.style.height = '100%';

        const navTL = gsap.timeline({ defaults: { duration: 1 } });

        navMenu();

        let navHeight = document.body.clientHeight;
        console.log(document.body, navHeight);

        navTL
          .to('.navBG', { height: navHeight, ease: 'expoScale' })
          .to('.navLnk', {
            display: 'block',
            opacity: 1,
            x: 0,
            paddingTop: 0,
            fontSize: '50px',
            stagger: 0.2,
            ease: 'expoScale',
            duration: 0.5,
          })
          .to('.extraLinks', { opacity: 1, ease: 'expo.out' }, 0.3)
          .to('.extraLinks', { y: 0, ease: 'expo.out', duration: 3 }, '< 0.3');

        window.addEventListener('resize', () => {
          gsap.to('.navBG', {
            height: document.body.clientHeight + 'px',
          });
        });
      } else {
        const navBG = document.querySelector('.navBG');
        gsap.to('.navLnk', {
          display: 'none',
          opacity: 0,
          x: 500,
          stagger: -0.2,
          ease: 'expoScale',
          duration: 0.5,
        });
        gsap.to('.navBG', { height: '0vh', ease: 'expoScale', duration: 2.5 });
        gsap.to('.nav_wrapper', { height: '25%', duration: 1 });
        gsap.to('.extraLinks', { opacity: 0, duration: 1, ease: 'expo.out' });

        nvWrapper.classList.remove('open');
        setTimeout(() => {
          document.body.removeChild(navBG);
        }, 2500);
      }
    } else {
      console.log('descktop');
    }
  });
});

window.addEventListener('click', (e) => {
  console.log(e.target);
  if (e.target.matches('.btn-letsTalk')) {
    e.preventDefault();
    letsTalk();
  }
});
