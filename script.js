// Sidebar Navigation
const openButton = document.querySelector('.open-btn');
const closeButton = document.querySelector('.close-btn');
const mainDiv = document.getElementById('main');
const nav = document.querySelector('.nav');

openButton.addEventListener('click', () => {
  nav.classList.add('visible');
});

closeButton.addEventListener('click', () => {
  nav.classList.remove('visible');
});

mainDiv.addEventListener('click', () => {
  nav.classList.remove('visible');
});
