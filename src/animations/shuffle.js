import gsap from 'gsap';

const spans = document.querySelectorAll('.nums');
const ctaH1 = document.querySelector('.hero_HL');

const textCta = ctaH1.innerText;

const textArr = textCta.split('');
const nuString = textCta.split('').join('');

const fragment = document.createDocumentFragment();
const spanArray = [];

gsap.from(ctaH1, { y: 150, duration: 1, ease: 'power2.out' });
gsap.from('.hero_P', {
  y: 200,
  opacity: 0,
  duration: 1,
  ease: 'power2.out',
  delay: 2,
});
gsap.from('.cta_btn', {
  opacity: 0,
  y: 200,
  duration: 1,
  ease: 'power2.out',
  delay: 3,
});
gsap.from('.copy', {
  opacity: 0,
  bottom: -50,
  duration: 1,
  ease: 'power2.out',
  delay: 4,
});

textArr.forEach((element, i) => {
  const h1span = document.createElement('span');
  h1span.className = 'chars' + i;

  fragment.appendChild(h1span);

  spanArray.push(h1span);

  const timer = setInterval(() => {
    let randomNum = Math.floor(Math.random() * textArr.length);
    let randomChar = nuString.charAt(randomNum);

    spanArray[i].innerText = randomChar;

    if (element == randomChar) {
      clearInterval(timer);
    }
  }, 50);

  ctaH1.innerText = '';
});

ctaH1.appendChild(fragment);

setTimeout(() => {
  for (const span of spans) {
    const numArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    const timer = setInterval(() => {
      for (let index = 0; index < numArr.length; index++) {
        const element = numArr[index];
        let randomNum = Math.ceil(Math.random() * element);
        span.innerText = randomNum;
      }
      setTimeout(() => {
        spans[0].innerText = 2;
        setTimeout(() => {
          spans[1].innerText = 0;
        }, 1000);
        setTimeout(() => {
          spans[2].innerText = 2;
        }, 1200);
        setTimeout(() => {
          spans[3].innerText = 4;
        }, 1500);
        clearInterval(timer);
      }, 1800);
    }, 50);
  }
}, 4000);
