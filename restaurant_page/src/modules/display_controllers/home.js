import header from './header'; 
import hero from './home_components/hero';

const home = () => {
  const contentContainer = document.querySelector('#content');
  contentContainer.appendChild(header);
  contentContainer.appendChild(hero);
};

export default home();
