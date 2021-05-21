import projectsContainer from './projects_container';
import todosContainer from './todos_container';
import '../../styles/main/main.css';

const mainContainer = (todos, Project, Todo) => {
  const todosList = todos.list
  const contentContainer = document.querySelector('#content-container');
  contentContainer.appendChild(projectsContainer.projectsHandler(todos));

  contentContainer.appendChild(todosContainer.todosHandler(todosList));

  projectsContainer.projectsEventHandlers(todos, Project);
  todosContainer.todosEventHandlers(todosList, Todo);
  let observerSelectProject = new MutationObserver(function() {
    projectsContainer.updateHeaderTitle();
    todosContainer.clearTodos();
    todosContainer.displayTodos(todosList);
    todosContainer.clearControlsContainer();
    todosContainer.todosControlsContainers.todosControlsHandler()
    todosContainer.todosEventHandlers(todosList, Todo);
  });

  observerSelectProject.observe(document.querySelector('#projects-list-container'),
                                          { subtree: true, childList: true, attributes: true, attributeFilter: ['id'] });
                                  
  let observerUpdateProjectsTodoCount = new MutationObserver(function() {
    projectsContainer.updateProjectTodoCount(todos);
  });

  observerUpdateProjectsTodoCount.observe(document.querySelector('#todos-list-container'),
                                          { childList: true });
};

export default mainContainer;
