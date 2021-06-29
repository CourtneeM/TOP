import '../styles/menu/style.css';

export const menu = () => {
  const menuContainer = document.createElement('section');
  const menuH2 = document.createElement('h2');
  const menuItems = [{name: 'Pizza', price: '$8'}, {name: 'Pasta', price: '$5'}, {name: 'Bread', price: '$2'}, {name: 'Dessert', price: '$10'}, {name: 'Drink', price: '$3'}];
  const menuItemElements = menuItems.map(item => {
    const p = document.createElement('p');
    p.textContent = `${item.name} - ${item.price}`;
    return p;
  });

  menuContainer.id = 'menu-container';
  menuH2.textContent = 'Menu';

  [menuH2, ...menuItemElements].forEach(el => menuContainer.appendChild(el));

  return menuContainer;
}
