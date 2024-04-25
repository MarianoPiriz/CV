import gsap from 'gsap';

import SplitType from 'split-type';

export const aboutPage = function () {
  const root = document.getElementById('about');
  gsap.from('.gltf_wrapper', {
    opacity: 0,
    scale: 0,
    duration: 5,
    ease: 'expoScale',
  });

  gsap.from('.about_content', {
    opacity: 0,
    y: 500,
    duration: 2,
    ease: 'expoScale',
  });

  const heading = root.querySelector('.secondary_heading');

  const text = new SplitType(heading, { types: 'chars' });

  gsap.from(text.chars, {
    y: 50,
    opacity: 0.2,
    stagger: 0.1,
    scrollTrigger: {
      trigger: '#about',
      scrub: 1,
      start: 'top 50%',
      end: 'top 20%',
    },
  });

  gsap.to('.gltf_wrapper', {
    y: -1000,
    width: '5%',
    duration: 1,
    ease: 'expoScale',
    scrollTrigger: {
      trigger: '#education',
      scrub: 1,
    },
  });

  gsap.to('.secondary_heading', {
    y: -300,
    opacity: 0,
    duration: 4,
    ease: 'expoScale',
    scrollTrigger: {
      trigger: '#education',
      scrub: 1,
      delay: 5,
      start: 'top 90%',
      end: 'top 20%',
    },
  });
  gsap.to('.about_p', {
    y: -200,
    duration: 2,
    ease: 'expoScale',
    scrollTrigger: {
      trigger: '#education',
      scrub: 1,
    },
  });
};
