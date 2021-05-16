import '../../styles/projects/projects.css';

const projectsContianer = (() => {

  const header = function(todos) {
    const projectsHeader = document.createElement('header');
    const projectsH1 = document.createElement('h1');
    const menu = document.createElement('i');

    projectsH1.textContent = todos.list.filter(project => project['default project'])[0].name;
    menu.id = 'menu';
    menu.classList.add("fas", "fa-bars");

    projectsHeader.appendChild(projectsH1);
    projectsHeader.appendChild(menu);

    return projectsHeader
  }

  const updateHeaderTitle = function() {
    const selectedProject = document.querySelector('#selected-project');
    const projectsH1 = document.querySelector('header>h1');
    projectsH1.textContent = [...selectedProject.children][0].textContent;
  }

  const projectsList = function(todos) {
    const projectsListContainer = document.createElement('div');
    projectsListContainer.id = 'projects-list-container';

    todos.list.forEach(project => {
      const projectContainer = document.createElement('div');
      const nameP = document.createElement('p');
      const numberTodosP = document.createElement('p');
      nameP.textContent = project.name;
      numberTodosP.textContent = project.todos.length;


      if (project['default project']) {
        projectContainer.id = 'selected-project';
      }

      projectContainer.appendChild(nameP);
      projectContainer.appendChild(numberTodosP);
      projectsListContainer.appendChild(projectContainer);
    });

    return projectsListContainer;
  }

  const projectsHandler = function(todos) {
    const projectsContainer = document.createElement('section');
    projectsContainer.appendChild(header(todos));
    projectsContainer.appendChild(projectsList(todos));

    return projectsContainer;
  }

  const projectsEventHandlers = function() {
    const projectsListContainer = document.querySelector('#projects-list-container');
    // display projects list
    document.querySelector('#menu').addEventListener('click', () => {
      projectsListContainer.style.display = projectsListContainer.style.display === 'block' ? 'none' : 'block';
    });

    // select a project from the project list 
    [...projectsListContainer.children].forEach(projectContainer => {
      projectContainer.addEventListener('click', () => {
        let selectedProject = document.querySelector('#selected-project');
        selectedProject.removeAttribute('id');
        projectContainer.id = 'selected-project';
      });
    });
  }

  return { projectsHandler, updateHeaderTitle, projectsEventHandlers };
})();

export default projectsContianer;
