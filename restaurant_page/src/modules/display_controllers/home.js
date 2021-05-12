import header from './header'; 
import hero from './home_components/hero';
import about from './home_components/about';

const home = () => {
  const contentContainer = document.querySelector('#content');
  contentContainer.appendChild(header);
  contentContainer.appendChild(hero);
  contentContainer.appendChild(about);
};

export default home();
