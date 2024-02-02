import { gsap } from 'gsap/gsap-core';

const svg = document.querySelector('svg');
const nvWrapper = document.querySelector('.nav_wrapper');
export const smallDevices = window.matchMedia(
  'all and (min-width: 375px) and (max-width:1200px)'
);
const iPadPro = window.matchMedia('all and (width:1366px) and (height:1024px)');
const userAgent = window.navigator.userAgent;
//console.log(userAgent);
const isLandscape = window.matchMedia('(orientation:landscape)');
const isPortrait = window.matchMedia('(orientation:portrait)');

//console.log(isLandscape.matches, isPortrait.matches);

export const homePage = function () {
  if (smallDevices.matches) {
    if (!nvWrapper.classList.contains('open')) {
      nvWrapper.classList.add('open');

      gsap.to(svg, {
        height: document.body.clientHeight + 'px',
        backgroundColor: 'black',
        ease: 'expoScale',
        duration: 2,
      });

      window.addEventListener('resize', () => {
        console.log(document.body.clientHeight);
        svg.style.height = document.body.clientHeight + 'px';
        if (!nvWrapper.classList.contains('open')) {
          svg.style.height = '0px';
        }
        if (iPadPro.matches && isLandscape.matches) {
          console.log('is iPadPro');
          svg.style.height = '0px';
          gsap.to('.navLnk', {
            display: 'block',
            opacity: 1,
            x: 0,
            duration: 0.5,
          });
        } else if (
          window.matchMedia('all and (width:1024px) and (height:1366px)')
            .matches
        ) {
          gsap.to('.navLnk', {
            opacity: 0,
          });
          gsap.to(svg, {
            height: '0vh',
            ease: 'expoScale',
            duration: 2,
          });
          setTimeout(() => {
            nvWrapper.classList.remove('open');
          }, 2000);
        }
      });

      gsap.to('.navLnk', {
        display: 'block',
        opacity: 1,
        x: 0,
        stagger: 0.2,
        ease: 'expoScale',
        duration: 0.5,
      });
    } else {
      nvWrapper.classList.remove('open');

      gsap.to('.navLnk', {
        display: 'none',
        opacity: 0,
        x: 500,
        stagger: -0.2,
        ease: 'expoScale',
        duration: 0.5,
      });

      gsap.to(svg, {
        height: '0vh',
        ease: 'expoScale',
        duration: 2,
      });
    }
  } else {
    console.log('NoteBook Desktop');
  }
};
