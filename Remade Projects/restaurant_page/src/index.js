import './styles/main.css';
import { header } from './modules/header'
import { home } from './modules/home'
import { menu } from './modules/menu'
import { about } from './modules/about'
import { contact } from './modules/contact'

const contentDiv = document.querySelector('#content');

const navEventHandler = () => {
  document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', e => {
      while ([...contentDiv.children].length > 1) {
        contentDiv.removeChild(contentDiv.lastChild);
      }
      
      if (e.target.id === 'home') contentDiv.appendChild(home());
      if (e.target.id === 'menu') contentDiv.appendChild(menu());
      if (e.target.id === 'about') contentDiv.appendChild(about());
      if (e.target.id === 'contact') contentDiv.appendChild(contact());
    });
  });
}

const initialRender = (() => {
  header();
  contentDiv.appendChild(home());
})();

navEventHandler();
  