import header from './modules/display_controllers/header'; 
import home from './modules/display_controllers/home';
import menu from './modules/display_controllers/menu.js';

const contentContainer = document.querySelector('#content');

while (contentContainer.firstChild) {
  contentContainer.removeChild(contentContainer.firstChild);
}

contentContainer.appendChild(header);


let activePage = document.querySelector('.active');
switch (activePage.textContent) {
  case 'Home':
    contentContainer.appendChild(home);
    break;
  case 'Menu':
    contentContainer.appendChild(menu);
    break;
  // case 'Contact':
  //   contentContainer.appendChild(contact);
  //   break;
}
