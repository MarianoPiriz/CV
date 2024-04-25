import contact from '../views/contact.html';
import gsap from 'gsap';
import SplitType from 'split-type';

export const contactPage = function (target) {
  console.log('Estas en contact');
  const root = document.getElementById(target);
  root.innerHTML = contact;

  const heading = root.querySelector('.secondary_heading');

  const text = new SplitType(heading, { types: 'chars' });

  gsap.from('.contact_section', {
    y: 600,
    duration: 3,
    ease: 'expoScale',
    scrollTrigger: {
      trigger: '#contact',
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
      trigger: '#contact',
      scrub: 1,
      start: 'top 90%',
      end: 'top 20%',
    },
  });

  gsap.from('.contact_item', {
    y: 500,
    opacity: 0,
    stagger: 0.3,
    duration: 3,
    delay: 3,
    scrollTrigger: {
      trigger: '#contact',
      scrub: 1,
      start: 'top 60%',
      end: 'top 20%',
    },
  });
};
