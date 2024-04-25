const sections = document.querySelectorAll('section');
const colorBg = document.body;

const observer = new IntersectionObserver(
  (entries) => {
    // console.log(entries);

    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        switch (entry.target.id) {
          case 'home': {
            colorBg.style.backgroundColor = 'var(--black)';
            history.replaceState(null, null, '#home');
            break;
          }
          case 'about': {
            colorBg.style.backgroundColor = 'var(--dark-grey)';
            history.replaceState(null, null, '#about');
            break;
          }
          case 'education': {
            colorBg.style.backgroundColor = 'var(--flat-grey)';
            history.replaceState(null, null, '#education');
            break;
          }
          case 'experience': {
            colorBg.style.backgroundColor = 'var(--mid-grey)';
            history.replaceState(null, null, '#experience');
            break;
          }
          case 'projects': {
            colorBg.style.backgroundColor = 'var(--light-grey)';
            history.replaceState(null, null, '#projects');
            break;
          }
          case 'contact': {
            colorBg.style.backgroundColor = 'var(--extra-light-grey)';
            history.replaceState(null, null, '#contact');
            break;
          }
        }
      }
    });
  },
  {
    threshold: 0.3,
  }
);

sections.forEach((section) => {
  observer.observe(section);
});
