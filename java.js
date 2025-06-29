const toggleBtn = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
const rightSide = document.getElementById('rightSide');

toggleBtn.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  rightSide.classList.toggle('active');


  if (navLinks.classList.contains('active')) {
    toggleBtn.innerHTML = '&times;';
  } else {
    toggleBtn.innerHTML = '&#9776;';
  }
});


