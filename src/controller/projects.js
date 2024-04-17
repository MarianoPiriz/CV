import freelance from '../views/freelance.html';
export const projectsPage = function () {
  console.log('Estas en Projects');
  const root = document.getElementById('projects');
  root.innerHTML = freelance;
};
