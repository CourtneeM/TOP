const headerDisplayController = (() => {
  const headerTitle = function() {
    const restaurantNameElement = document.createElement('h1');
    restaurantNameElement.textContent = "Lilly's Tea House";
    return restaurantNameElement;
  }

  const navItems = function() {
    const navContainer = document.createElement('ul');
    const navItems = ['Home', 'Menu', 'Contact'];

    for (let item of navItems) {
      const li = document.createElement('li');
      li.textContent = item;

      if (item === 'Home') {
        li.id = 'active';
      }

      navContainer.appendChild(li);
    }

    return navContainer;
  }

  const header = function() {
    const headerContainer = document.createElement('header');

    headerContainer.appendChild(headerTitle());
    headerContainer.appendChild(navItems());

    return headerContainer;
  }

  return { header };
})();

export default headerDisplayController.header();
