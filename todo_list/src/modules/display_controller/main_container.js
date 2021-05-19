import projectsContainer from './projects_container';
import todosContainer from './todos_container';
import '../../styles/main/main.css';

const mainContainer = (todos, Project, Todo) => {
  const contentContainer = document.querySelector('#content-container');
  contentContainer.appendChild(projectsContainer.projectsHandler(todos));

  contentContainer.appendChild(todosContainer.todosHandler(todos));

  projectsContainer.projectsEventHandlers(todos, Project);
  todosContainer.todosEventHandlers(todos, Todo);

  let observerSelectProject = new MutationObserver(function() {
    projectsContainer.updateHeaderTitle();
    todosContainer.clearTodos();
    todosContainer.displayTodos(todos);
    todosContainer.clearControlsContainer();
    todosContainer.todosControlsContainers.todosControlsHandler()
    todosContainer.todosEventHandlers(todos, Todo);
  });

  observerSelectProject.observe(document.querySelector('#projects-list-container'),
                                          { subtree: true, attributes: true, attributeFilter: ['id'] });

                                  
  // let observerUpdateProjectsTodoCount = new MutationObserver(function() {
  //   // projectsContainer.clearProjectsList();
  //   // projectsContainer.projectsList(todos);
  //   // projectsContainer.projectsEventHandlers(todos, Project);
  // });

  // observerUpdateProjectsTodoCount.observe(document.querySelector('#todos-list-container'),
  //                                         { childList: true });
};

export default mainContainer;
