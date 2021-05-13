import header from './modules/display_controllers/header'; 
import home from './modules/display_controllers/home';
import menu from './modules/display_controllers/menu';
import contact from './modules/display_controllers/contact';

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
  case 'Contact':
    contentContainer.appendChild(contact);
    break;
}
