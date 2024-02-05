import { homePage } from '../views/home.js';
import { aboutPage } from '../views/about.js';
import { educationPage } from '../views/education.js';
import { experiencePage } from '../views/experience.js';
import { projectsPage } from '../views/projects.js';
import { contactPage } from '../views/contact.js';
import { notFoundPage } from '../views/404.js';

window.addEventListener('hashchange', () => {
  console.log(location.hash);
  router(window.location.hash);
});

export const router = (route) => {
  switch (route) {
    default: {
      notFoundPage();
    }
    case '#home': {
      homePage();

      break;
    }
    case '#about': {
      aboutPage();
      break;
    }
    case '#education': {
      educationPage();
      break;
    }
    case '#experience': {
      experiencePage();
      break;
    }
    case '#projects': {
      projectsPage();
      break;
    }
    case '#contact': {
      contactPage();
      break;
    }
  }
};
