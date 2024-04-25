import work from '../views/work.html';
import gsap from 'gsap';
import SplitType from 'split-type';

export const experiencePage = function (target) {
  const root = document.getElementById(target);
  root.innerHTML = work;
  root.style.height = 'fit-content';

  const heading = root.querySelector('.secondary_heading');

  const text = new SplitType(heading, { types: 'chars' });

  gsap.from('.work_section', {
    y: 600,
    duration: 3,
    ease: 'expoScale',
    scrollTrigger: {
      trigger: '#experience',
      scrub: 1,
      start: 'top 99%',
      end: 'top 20%',
    },
  });
  gsap.from(text.chars, {
    y: 50,
    opacity: 0.2,
    stagger: 0.1,
    scrollTrigger: {
      trigger: '#experience',
      scrub: 1,
      start: 'top 90%',
      end: 'top 20%',
    },
  });

  gsap.from('.group', {
    y: 500,
    opacity: 0,
    stagger: 0.3,
    duration: 3,
    delay: 3,
    scrollTrigger: {
      trigger: '#experience',
      scrub: 1,
      start: 'top 60%',
      end: 'top 20%',
    },
  });

  const digits = document.querySelector('.num');

  const value = digits.getAttribute('data-value');

  const targetObs = document.querySelector('.item-5');

  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        gsap.from('.item-5', {
          opacity: 0,
          duration: 2,
          ease: 'exposcale',
        });
        let contador = 0;
        const timer = setInterval(() => {
          contador++;
          digits.innerText = contador;
          if (contador == value) clearInterval(timer);
        }, 50);
      }
    });
  });

  counterObserver.observe(targetObs);
};
