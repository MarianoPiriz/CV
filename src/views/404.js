export const notFoundPage = function () {
  console.log('No encontrado');
  const notFound = document.createElement('div');
  notFound.classList.add('.notFound');
  notFound.style.width = '100vw';
  notFound.style.height = '100vh';
  notFound.style.backgroundColor = 'Black';
  notFound.style.position = 'absolute';
  notFound.style.top = '0';
  notFound.style.left = '0';
  notFound.style.overflow = 'hidden';
  document.body.append(notFound);
};
