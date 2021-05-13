import header from './modules/display_controllers/header'; 
import home from './modules/display_controllers/home';
import menu from './modules/display_controllers/menu';
import contact from './modules/display_controllers/contact';

const contentContainer = document.querySelector('#content');
contentContainer.appendChild(header);

const navItems = Array.from(header.querySelectorAll('li'));
let activePage = document.querySelector('#active');

const loadPage = () => {
  while (contentContainer.firstChild) {
    contentContainer.removeChild(contentContainer.firstChild);
  }

  contentContainer.appendChild(header);

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
}

navItems.forEach(item => item.addEventListener('click', () => {
  activePage.removeAttribute('id');
  item.id = 'active';
  activePage = item;
  loadPage();
}));

loadPage();
