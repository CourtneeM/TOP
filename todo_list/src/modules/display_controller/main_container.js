import projectsContainer from './projects_container';
import todosContainer from './todos_container';
import '../../styles/main/main.css';

const mainContainer = todos => {
  const contentContainer = document.querySelector('#content-container');
  contentContainer.appendChild(projectsContainer.projectsHandler(todos));

  contentContainer.appendChild(todosContainer.initialTodosRender(todos));

  projectsContainer.projectsEventHandlers();

  let observer = new MutationObserver(function() {
    projectsContainer.updateHeaderTitle();
    todosContainer.clearTodos();
    todosContainer.displayTodos(todos);
    
  });

  observer.observe(document.querySelector('#projects-list-container'),
                                          { subtree: true, attributes: true, attributeFilter: ['id'] });

  // look for a change in #selected-project
  // on change, rerender todosContainer with the selected project's todos
};

export default mainContainer;
