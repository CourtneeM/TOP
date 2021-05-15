import projectsContainer from './projects_container';
import todosContainer from './todos_container';
import '../../styles/main/main.css';

const mainContainer = todos => {
  const contentContainer = document.querySelector('#content-container');
  contentContainer.appendChild(projectsContainer.header(todos));
  contentContainer.appendChild(todosContainer.displayTodosContainer(todos));
};

export default mainContainer;
