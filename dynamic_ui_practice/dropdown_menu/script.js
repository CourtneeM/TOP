function dropdownMenu(dropdownTarget) {  
  dropdownTarget.addEventListener('click', () => {
    document.querySelector('#nav-items').classList.toggle('hidden');
  });
}

dropdownMenu(document.querySelector('#menu-icon'));
