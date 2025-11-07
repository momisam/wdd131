// Footer info
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;

// Hamburger toggle
const menuButton = document.querySelector('#menu');
const navMenu = document.querySelector('#navMenu');

menuButton.addEventListener('click', () => {
  navMenu.classList.toggle('open');
  // Toggle button symbol between ☰ and ✖
  menuButton.textContent = navMenu.classList.contains('open') ? '✖' : '☰';
});
