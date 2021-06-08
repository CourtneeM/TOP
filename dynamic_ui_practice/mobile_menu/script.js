function showDropdown(targetDropdown) {
  targetDropdown.addEventListener('click', () => {
    document.querySelector('#menu').classList.remove('hidden');
    document.querySelector('#menu-icon').classList.add('hidden');
    hideDropdown(document.querySelector('#menu'));
  });
}

function hideDropdown(targetDropdown) {
  targetDropdown.querySelector('#close-menu-btn').addEventListener('click', () =>{
    targetDropdown.classList.add('hidden');
    document.querySelector('#menu-icon').classList.remove('hidden');
  });
}

showDropdown(document.querySelector('#menu-icon'));
