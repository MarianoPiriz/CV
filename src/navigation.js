import { gsap } from 'gsap/gsap-core';

const navBar = document.querySelector('.navBar');
const navTL = gsap.timeline();

document.addEventListener('click', (e) => {
  const target = e.target.className;

  switch (target) {
    case 'logoBtn': {
      e.preventDefault();
      navMenu();

      break;
    }
    case 'navLnk': {
      navMenu();
    }
  }
});

const navMenu = () => {
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
};
