import { homePage } from '../controller/home.js';
import { aboutPage } from '../controller/about.js';
import { educationPage } from '../controller/education.js';
import { experiencePage } from '../controller/experience.js';
import { projectsPage } from '../controller/projects.js';
import { contactPage } from '../controller/contact.js';
import { notFoundPage } from '../controller/404.js';

window.addEventListener('hashchange', (e) => {
  const location_Href = window.location.hash;
  console.log(location_Href);
  router(location_Href);
});

const router = (route) => {
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
