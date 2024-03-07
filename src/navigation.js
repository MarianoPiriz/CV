import { navMenu } from './controller/navmenu';
import { letsTalk } from './controller/letsTalk';

function addGlobalEventListener(type, selector, callback) {
  document.addEventListener(type, (e) => {
    if (e.target.matches(selector)) callback(e);
  });
}

addGlobalEventListener('click', 'a', (e) => {
  const target = e.target.className;
  console.log(e.target);

  switch (target) {
    case 'logoBtn': {
      e.preventDefault();
      navMenu();

      break;
    }
    case 'cta-btn': {
      letsTalk();
    }
  }
});

// document.addEventListener('click', (e) => {
//   e.preventDefault();
//   console.log(e.target);

//   const target = e.target;

//   const route = target.getAttribute('href');

//   console.log(route);

// });
