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

  const projectControls = function() {
    const projectControls = document.createElement('div');
    projectControls.id = "project-controls";
    ['Remove', 'Edit', 'Add'].forEach(control => {
      const p = document.createElement('p');
      p.textContent = control;
      projectControls.appendChild(p);
    });

    return projectControls;
  }

  const cancelAddBtns = function() {
    const cancelButton = document.createElement('button');
    const addButton = document.createElement('button');

    cancelButton.textContent = 'Cancel';
    cancelButton.classList.add('btn-project-control-action');
    addButton.textContent = 'Add';
    addButton.classList.add('btn-project-control-action');

    return [cancelButton, addButton];
  }

  const addProjectHandler = function() {
    const addProjectContainer = document.createElement('div');
    const input = document.createElement('input');
    const cancelButton = document.createElement('button');
    const addButton = document.createElement('button');

    addProjectContainer.id = 'add-project-container';
    addProjectContainer.classList.add('project-control-action-container');
    input.attributes.type = 'text';
    cancelButton.textContent = 'Cancel';
    cancelButton.classList.add('btn-project-control-action');
    addButton.textContent = 'Add';
    addButton.classList.add('btn-project-control-action');
    addProjectContainer.appendChild(input);
    addProjectContainer.appendChild(cancelButton);
    addProjectContainer.appendChild(addButton);

    addProjectContainer.style.display = 'none';
    return addProjectContainer;
  }

  const editProjectHandler = function() {
    const editProjectContainer = document.createElement('div');
    const [cancelButton, addButton] = cancelAddBtns();

    editProjectContainer.id = 'edit-project-container';
    editProjectContainer.appendChild(cancelButton);
    editProjectContainer.appendChild(addButton);

    editProjectContainer.style.display = 'none';
    return editProjectContainer;
  }

  const removeProjectHandler = function() {
    const removeProjectContainer = document.createElement('div');
    const [cancelButton, addButton] = cancelAddBtns();

    removeProjectContainer.id = 'remove-project-container';
    removeProjectContainer.appendChild(cancelButton);
    removeProjectContainer.appendChild(addButton);

    removeProjectContainer.style.display = 'none';
    return removeProjectContainer;
  }

  const projectsList = function(todos) {
    const projectsListContainer = document.createElement('div');
    projectsListContainer.id = 'projects-list-container';

    todos.list.forEach(project => {
      const projectContainer = document.createElement('div');
      const nameP = document.createElement('p');
      const numberTodosP = document.createElement('p');
      projectContainer.classList.add('project-container');
      nameP.textContent = project.name;
      numberTodosP.textContent = project.todos.length;


      if (project['default project']) {
        projectContainer.id = 'selected-project';
      }

      projectContainer.appendChild(nameP);
      projectContainer.appendChild(numberTodosP);
      projectsListContainer.appendChild(projectContainer);
    });
    
    projectsListContainer.appendChild(projectControls());
    projectsListContainer.appendChild(addProjectHandler());
    projectsListContainer.appendChild(editProjectHandler());
    projectsListContainer.appendChild(removeProjectHandler());

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
    const projectContainers = [...document.querySelectorAll('.project-container')];
    const projectControls = document.querySelector('#project-controls');
    const projectControlActionBtns = document.querySelectorAll('.btn-project-control-action');

    // display projects list
    document.querySelector('#menu').addEventListener('click', () => {
      projectsListContainer.style.display = projectsListContainer.style.display === 'block' ? 'none' : 'block';
    });

    // select a project from the project list 
    projectContainers.forEach(projectContainer => {
      projectContainer.addEventListener('click', () => {
        let selectedProject = document.querySelector('#selected-project');
        selectedProject.removeAttribute('id');
        projectContainer.id = 'selected-project';
      });
    });

    // display one of the project controls on click
    [...projectControls.children].forEach(button => {
      button.addEventListener('click', () => {
        projectControls.style.display = 'none';
        switch (button.textContent) {
          case 'Remove':
            document.querySelector('#remove-project-container').style.display = 'flex';
            break;
          case 'Edit':
            document.querySelector('#edit-project-container').style.display = 'flex';
            break;
          case 'Add':
            document.querySelector('#add-project-container').style.display = 'flex';
            break;
        }
      });
    });

    // submit one of the project controls
    [...projectControlActionBtns].forEach(button => {
      button.addEventListener('click', () => {
        projectControls.style.display = 'flex';
        [...document.querySelectorAll('.project-control-action-container')].forEach(container => {
          container.style.display = 'none';
        });
      });
    });

  }

  return { projectsHandler, updateHeaderTitle, projectsEventHandlers };
})();

export default projectsContianer;
