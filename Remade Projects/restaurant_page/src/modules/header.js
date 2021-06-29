import '../styles/header/style.css';

export const header = () => {
  const headerContainer = document.createElement('header');
  const logoH1 = document.createElement('h1');
  const navList = document.createElement('ul');
  const navItems = ['Home', 'Menu', 'About', 'Contact'];
  
  logoH1.textContent = "Franky's Bistro";

  navItems.forEach(item => {
    const li = document.createElement('li');
    li.id = item.toLowerCase();
    li.classList.add('nav-item');
    li.textContent = item;

    navList.appendChild(li);
  });

  [logoH1, navList].forEach(el => headerContainer.appendChild(el));
  document.querySelector('#content').appendChild(headerContainer);
};
