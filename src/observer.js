import { CompressedTextureLoader } from 'three';
import { homePage } from './controller/home.js';
import { aboutPage } from './controller/about.js';
import { educationPage } from './controller/education.js';
import { experiencePage } from './controller/experience.js';
import { projectsPage } from './controller/projects.js';
import { contactPage } from './controller/contact.js';

const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver(
  (entries) => {
    // console.log(entries);

    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // console.log(entry.target.id);
        // console.log(entry.isIntersecting);

        switch (entry.target.id) {
          case 'home': {
            //homePage();
            history.replaceState(null, null, '#home');
            break;
          }
          case 'about': {
            aboutPage();
            history.replaceState(null, null, '#about');
            break;
          }
          case 'education': {
            educationPage();
            history.replaceState(null, null, '#education');
            break;
          }
          case 'experience': {
            experiencePage();
            history.replaceState(null, null, '#experience');
            break;
          }
          case 'projects': {
            projectsPage();
            history.replaceState(null, null, '#projects');
            break;
          }
          case 'contact': {
            contactPage();
            history.replaceState(null, null, '#contact');
            break;
          }
        }
        //observer.unobserve(entry.target);
      }
    });
  },
  {
    rootMargin: '-100px',
  }
);

sections.forEach((section) => {
  observer.observe(section);
});
