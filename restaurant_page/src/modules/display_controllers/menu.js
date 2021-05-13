const menuDisplayController = (() => {
  const menuImg = function() {
    const img = document.createElement('img');
    img.src = "./assets/menu_img.jpg";

    return img;
  }

  const menuTitle = function() {
    const h2 = document.createElement('h2');
    h2.textContent = "Menu";

    return h2;
  }

  const menuItems = function() {
    const section = document.createElement('section');
    section.id = "menu-items";

    const items = { 
      'Tea': [ {'Green Tea': '$2'}, {'Chai Tea': '$3'}, ],
      'Coffee': [ {'Black Coffee': '$.50'}, {'Frapp': '$5'}, ],
      'Sandwiches': [ {'Grilled Cheese': '$4'}, {'Meatball Sub': '$7'} ],
      'Snacks': [ {'Chips': '$1'}, {'Crackers': '$2'}, ],
      'Desserts': [ {'Chocolate Cake': '$3'}, {'Strawberry Pie': '$2'}, ],
    };

    for (let category in items) {
      const div = document.createElement('div');
      const h3 = document.createElement('h3');
      h3.textContent = category;
      div.appendChild(h3);
      
      for (let item of items[category]) {
        let itemName = Object.keys(item)[0];
        const p = document.createElement('p');
        p.textContent = `${itemName}: ${item[itemName]}`;
        div.appendChild(p);
      }
      section.appendChild(div);
    }

    return section;
  }

  const menu = function() {
    const main = document.createElement('main');
    main.id = 'main-menu';
    const section = document.createElement('section');
    section.id = "hero-container";

    section.appendChild(menuImg());
    section.appendChild(menuTitle());
    main.appendChild(section);
    main.appendChild(menuItems());

    return main;
  }

  return { menu }
})();

export default menuDisplayController.menu();
