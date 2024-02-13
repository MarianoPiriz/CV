import { gsap } from 'gsap/gsap-core';

import navMenuHtml from '../views/navMenu.html';

export const navMenu = () => {
  const navBG = document.createElement('div');
  navBG.classList.add('navBG');

  document.body.appendChild(navBG);
  const extraLinks = document.createElement('div');
  extraLinks.classList.add('extraLinks');
  navBG.appendChild(extraLinks);
  extraLinks.innerHTML = navMenuHtml;
};
