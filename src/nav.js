import { gsap } from 'gsap/gsap-core';
import { homePage } from './pages.js';

const nvWrapper = document.querySelector('.nav_wrapper');
const nvBar = nvWrapper.querySelector('#nvBar');
const navLnk = nvBar.querySelectorAll('a');
const sections = Array.from(document.querySelectorAll('section'));

navLnk.forEach((link, index) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    //console.log(e.target);
    link.setAttribute('id', index);
    let selection;

    sections.forEach((section, key) => {
      selection = section.id;
      if (link.id == key) {
        let filteredSelection = sections.filter(
          (section) => section.id != selection
        );

        section.classList.remove('hidden');

        filteredSelection.forEach((section) => {
          section.classList.add('hidden');
        });
        console.log(section);

        switch (selection) {
          case 'home': {
            console.log('Estas en Home');
            homePage();

            break;
          }
          case 'about': {
            console.log('Estas en about');
            break;
          }
          case 'education': {
            console.log('Estas en education');
            break;
          }
          case 'experience': {
            console.log('Estas en experience');
            break;
          }
          case 'projects': {
            console.log('Estas en projects');
            break;
          }
          case 'contact': {
            console.log('Estas en contact');
            break;
          }
        }
      }
    });
  });
});
