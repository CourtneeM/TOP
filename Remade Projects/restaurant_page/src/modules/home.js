import '../styles/home/style.css';

export const home = () => {
  const homeContainer = document.createElement('section');
  const h2 = document.createElement('h2');
  const p = document.createElement('p');

  homeContainer.id = 'home-container';

  h2.textContent = "Home Cooked Italian Food Without a Mess";
  p.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, amet? Vero ipsum dolorem amet ab dolores praesentium tempore quam natus eius necessitatibus dicta mollitia aut eos, harum sapiente temporibus, minus, suscipit animi rerum aperiam impedit? Excepturi distinctio fuga veniam non.'

  homeContainer.appendChild(h2);
  homeContainer.appendChild(p);
  return homeContainer;
}
