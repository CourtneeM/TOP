import projectsContainer from './projects_container';
import todosContainer from './todos_container';

const mainContainer = todos => {
  const contentContainer = document.querySelector('#content-container');
  // console.log(todos);
  contentContainer.appendChild(projectsContainer.header(todos));
  // contentContainer.appendChild(todosContainer);
};

export default mainContainer;
