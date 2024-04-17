import { navMenu } from './controller/navmenu';

function addGlobalEventListener(type, selector, callback) {
  document.addEventListener(type, (e) => {
    if (e.target.matches(selector)) callback(e);
  });
}

addGlobalEventListener('click', 'a', (e) => {
  const target = e.target.className;

  switch (target) {
    case 'logoBtn': {
      e.preventDefault();
      navMenu();

      break;
    }
    case 'navLnk': {
      navMenu();
    }
  }
});

// window.addEventListener('scroll', (e) => {
//   const sections = document.querySelectorAll('section');
//   console.log(document.documentElement.clientHeight);
//   console.log(window.scrollY);
//   console.log(sections);
//   sections.forEach((section) => {
//     console.log(section.id, Math.ceil(section.getBoundingClientRect().top));
//     const target = section.id;
//     const targetPosition = Math.ceil(section.getBoundingClientRect().top);
//     if (targetPosition <= 100) {
//       //window.location.hash = '#' + target;
//       history.replaceState(
//         null,
//         null,
//         document.location.pathname + '#' + target
//       );
//     }
//   });
// });
