import work from '../views/work.html';
import gsap from 'gsap';
import SplitType from 'split-type';
import { element } from 'three/examples/jsm/nodes/Nodes.js';

export const experiencePage = function () {
  console.log('Estas en Experience');
  const root = document.getElementById('experience');
  root.innerHTML = work;
  root.style.height = 'fit-content';

  const heading = root.querySelector('.secondary_heading');

  const text = new SplitType(heading, { types: 'chars' });

  gsap.from('.work_section', {
    y: 500,
    duration: 3,
    ease: 'expoScale',
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

  const digits = root.querySelector('.num');

  const value = digits.getAttribute('data-value');

  const target = root.querySelector('.item-5');

  const observer = new IntersectionObserver((entries) => {
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

  observer.observe(target);
};
