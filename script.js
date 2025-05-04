// script.js
const dancer = document.querySelector('.dancer');
dancer.addEventListener('click', () => {
  dancer.classList.add('bounce');
  setTimeout(() => dancer.classList.remove('bounce'), 500);
});
