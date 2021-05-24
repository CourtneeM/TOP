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

  new MutationObserver(function observerSelectProject() {
    projectsContainer.updateHeaderTitle();
    todosContainer.clearTodos();
    todosContainer.displayTodos(todosList);
    todosContainer.clearControlsContainer();
    todosContainer.todosControlsContainers.todosControlsHandler()
    todosContainer.todosEventHandlers(todosList, Todo);
  }).observe(document.querySelector('#projects-list-container'),
             { subtree: true, childList: true, attributes: true, attributeFilter: ['id'] });
                                
  new MutationObserver(function observerUpdateProjectsTodoCount() {
    projectsContainer.updateProjectTodoCount(todos);
  }).observe(document.querySelector('#todos-list-container'),
             { childList: true });
};

export default mainContainer;
