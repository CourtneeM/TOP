import hero from './home_components/hero';
import about from './home_components/about';

const home = () => {
  const main = document.createElement('main');
  main.appendChild(hero);
  main.appendChild(about);

  return main;
};

export default home();
