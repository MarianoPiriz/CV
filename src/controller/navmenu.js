import { gsap } from 'gsap/gsap-core';
const navBar = document.querySelector('.navBar');
const linkList = document.querySelector('.linkList');

const navTL = gsap.timeline();

export const navMenu = () => {
  if (!navBar.classList.contains('its_open')) {
    navBar.classList.add('its_open');
    navTL
      .fromTo(
        navBar,
        { height: 0 },
        {
          height: '100vh',
          ease: 'expoScale',
          duration: 0.5,
        }
      )
      .from('.navLnk', {
        y: -300,
        opacity: 0,
        stagger: 0.1,
      });
  } else {
    navTL.to(navBar, {
      height: '0vh',
      duration: 1,
      ease: 'expoScale',
    });

    setTimeout(() => {
      navBar.classList.remove('its_open');
    }, 600);
  }
  //
  // //window.scrollTo(0, 0);
  // if (!nvWrapper.classList.contains('open')) {
  //   nvWrapper.classList.add('open');
  //   nvWrapper.style.height = navHeight;
  //   const navBG = document.createElement('div');
  //   navBG.classList.add('navBG');
  //   linkList.classList.add('its_open');
  //   document.body.appendChild(navBG);
  //   const extraLinks = document.createElement('div');
  //   extraLinks.classList.add('extraLinks');
  //   navBG.appendChild(extraLinks);
  //   extraLinks.innerHTML = navMenuHtml;
  //   let navHeight = document.documentElement.clientHeight;
  //   navTL
  //     .to('.navBG', { height: navHeight, ease: 'expoScale', duration: 1 })
  //     .to(
  //       '.extraLinks',
  //       { y: 0, opacity: 1, ease: 'expo.out', duration: 2, stagger: 0.3 },
  //       '< 0.3'
  //     )
  //     .fromTo(
  //       '.navLnk',
  //       { y: -500 },
  //       { y: 0, duration: 1.5, ease: 'expoScale' },
  //       '< 0.1'
  //     )
  //     .to(
  //       '.navLnk',
  //       {
  //         display: 'block',
  //         opacity: 1,
  //         ease: 'expoScale',
  //         duration: 2,
  //       },
  //       '< 0.2'
  //     );
  //   // window.addEventListener('resize', () => {
  //   //   gsap.to('.navBG', {
  //   //     height: document.body.clientHeight + 'px',
  //   //   });
  //   // });
  // } else {
  //   const navBG = document.querySelector('.navBG');
  //   navTL
  //     .fromTo(
  //       '.navLnk',
  //       { y: 0, display: 'block', opacity: 1 },
  //       {
  //         y: -500,
  //         display: 'none',
  //         opacity: 0,
  //         duration: 2,
  //         ease: 'expoScale',
  //       }
  //     )
  //     .to(
  //       '.extraLinks',
  //       {
  //         y: -500,
  //         opacity: 0,
  //         duration: 1,
  //         ease: 'expoScale',
  //         stagger: 0.3,
  //       },
  //       '< 0.2'
  //     )
  //     .to('.navBG', { height: 0, duration: 1.2 }, 0.3);
  //   nvWrapper.classList.remove('open');
  //   linkList.classList.remove('its_open');
  //   setTimeout(() => {
  //     document.body.removeChild(navBG);
  //   }, 2000);
  // }
};
