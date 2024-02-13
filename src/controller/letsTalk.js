import { gsap } from 'gsap/gsap-core';

import letsTalkHtml from '../views/letsTalk.html';
export const letsTalk = () => {
  const ctaHtml = document.createElement('div');
  ctaHtml.classList.add('ctaPage');
  ctaHtml.innerHTML = letsTalkHtml;
  document.body.appendChild(ctaHtml);
  console.log(ctaHtml);
  const ctaTL = gsap.timeline();

  ctaTL
    .to('.ctaPage', {
      height: '100vh',
      ease: 'expo.out',
      duration: 1.3,
    })
    .fromTo(
      '.btn-cta',
      {
        y: -300,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
        ease: 'expo.out',
      },
      0.15
    )
    .fromTo(
      '.ctaMessage',
      {
        y: -300,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        ease: 'expo.out',
        duration: 2,
      },
      0.5
    );
  window.addEventListener('resize', () => {
    gsap.to('.ctaPage', {
      height: document.body.clientHeight + 'px',
    });
  });

  ctaHtml.addEventListener('click', (e) => {
    if (e.target.matches('.btn-cta')) {
      console.log(e.target);

      gsap.to('.ctaMessage', {
        y: -400,
        opacity: 0,
        duration: 1,
        ease: 'expo.out',
      });
      gsap.to('.ctaPage', {
        height: '0vh',
        ease: 'expo.out',
        duration: 1.3,
        delay: 0.25,
      });

      gsap.to('.btn-cta', {
        y: -400,
        opacity: 0,
        duration: 1,
        ease: 'expo.out',
        delay: 0.1,
      });
      setTimeout(() => {
        document.body.removeChild(ctaHtml);
      }, 2000);
    }
  });
};
