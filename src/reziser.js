const copy = document.getElementById('copy');
const home = document.querySelector('#home');
const heroHeader = document.querySelector('.hero_HL');
const navWrapper = document.querySelector('.nav_wrapper');
const heroWrapper = document.querySelector('.hl_wrapper');
const cvsWrapper = document.querySelector('#cvs_wrapper');
const svg = document.querySelector('svg');

const userAgent = navigator.userAgent;

const mediaQuery = window.matchMedia;

export const screeSize = {};

window.addEventListener('resize', (e) => {
  //console.log(document.body);
  let w = document.body.clientWidth;
  let h = document.body.clientHeight;
  screeSize.w = w;
  screeSize.h = h;
});
console.log(screeSize);

// const smallDevices = mediaQuery(
//   'all and (min-width: 375px) and (max-width:430px)'
// );
// // const mediumDevices = mediaQuery('all and (min-width: 431px)');
// let headerWidth = heroHeader.clientWidth;
// let headerHeight = heroHeader.clientHeight;
// //Pitagoras;
// let hcalc = Math.sqrt(Math.pow(headerWidth, 2) + Math.pow(headerHeight, 2));
// let pf = Math.trunc(hcalc);
// // const minFp = 343;
// // const headerMinFs = 5.5;

// const headerPf = 62.363636;
// //console.log(headerPf);

// let responsiveFs = pf / headerPf;

// heroHeader.style.fontSize = responsiveFs + 'rem';

// window.addEventListener('resize', () => {
//   headerWidth = heroHeader.clientWidth;
//   headerHeight = heroHeader.clientHeight;
//   hcalc = Math.sqrt(Math.pow(headerWidth, 2) + Math.pow(headerHeight, 2));
//   pf = Math.trunc(hcalc);
//   responsiveFs = pf / headerPf;
//   heroHeader.style.fontSize = responsiveFs + 'rem';

//   console.log('font size', responsiveFs);

//   console.log('w', headerWidth, 'h', headerHeight, pf);
// });

//Screen Orientation

// function resizer(element, ()) {
//   window.addEventListener('load', (e) => {
//     console.log(e);
//     window.addEventListener('resize', (e) => {
//       const eW = element.clientWidth;
//       const eH = element.clientHeight;
//       let pf = Math.trunc(Math.sqrt(Math.pow(eW, 2) + Math.pow(eH, 2)));
//

//       console.log(eW, eH, pf);
//     });
//   });
// }

// resizer(heroHeader);

// const observer = new ResizeObserver((entries) => {
//   console.log(entries[0]);
//   const headerWidth = heroHeader.clientWidth;
//   const headerHeight = heroHeader.clientHeight;
//   //Pitagoras;
//   let hcalc = Math.sqrt(Math.pow(headerWidth, 2) + Math.pow(headerHeight, 2));
//   let pf = Math.trunc(hcalc);
//   const minFp = 343;
//   const headerMinFs = 5.5;

//   let headerPf = 62.5;
//   //console.log(headerPf);

//   let responsiveFs = pf / headerPf;

//   heroHeader.style.fontSize = responsiveFs + 'rem';

//   console.log(responsiveFs);

//   console.log('w', headerWidth, 'h', headerHeight, pf);
// });
// observer.observe(heroHeader);
