import contact from '../views/contact.html';

export const contactPage = function () {
  console.log('Estas en contact');
  const root = document.getElementById('contact');
  root.innerHTML = contact;
};
