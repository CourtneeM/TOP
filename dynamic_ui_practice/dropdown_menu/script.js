const menuIcon = document.querySelector('#menu-icon');

menuIcon.addEventListener('click', () => {
  document.querySelector('#nav-items').classList.toggle('hidden');
});
