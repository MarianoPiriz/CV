import education from '../views/academics.html';
import gsap from 'gsap';
import SplitType from 'split-type';
export const educationPage = function () {
  console.log('Estas en Education');
  const root = document.getElementById('education');
  root.innerHTML = education;
  root.style.height = 'fit-content';

  const heading = root.querySelector('.secondary_heading');

  const text = new SplitType(heading, { types: 'chars' });

  gsap.from('.academic_section', {
    y: 500,
    duration: 3,
    ease: 'expoScale',
  });
  gsap.from(text.chars, {
    y: 50,
    opacity: 0.2,
    stagger: 0.1,
    scrollTrigger: {
      trigger: '#education',
      scrub: 1,
      start: 'top 90%',
      end: 'top 20%',
    },
  });

  gsap.from('.flx_item', {
    y: 500,
    opacity: 0,
    stagger: 0.3,
    duration: 3,
    delay: 3,
    scrollTrigger: {
      trigger: '#education',
      scrub: 1,
      start: 'top 60%',
      end: 'top 20%',
    },
  });

  const target = root.querySelector('.skill_section');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        gsap.from('.level_bar', {
          width: 0,
          duration: 2,
          ease: 'expoScale',
          stagger: 0.1,
          delay: 0.5,
        });
      }
    });
  });

  observer.observe(target);
};
