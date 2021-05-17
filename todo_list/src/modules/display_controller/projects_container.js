import '../../styles/projects/projects.css';

const projectsContainer = (() => {
  const projectsListContainer = document.createElement('div');
  projectsListContainer.id = 'projects-list-container';

  const header = function(todos) {
    const projectsHeader = document.createElement('header');
    const projectsH1 = document.createElement('h1');
    const menu = document.createElement('i');
    const closeMenuBtn = document.createElement('i');

    projectsH1.textContent = todos.list.filter(project => project['default project'])[0].name;
    menu.id = 'menu';
    menu.classList.add("fas", "fa-bars");
    closeMenuBtn.id = 'close-menu-btn';
    closeMenuBtn.classList.add("fas", "fa-times");
    closeMenuBtn.style.display = 'none';

    projectsHeader.appendChild(projectsH1);
    projectsHeader.appendChild(menu);
    projectsHeader.appendChild(closeMenuBtn);

    return projectsHeader
  }

  const updateHeaderTitle = function() {
    const selectedProject = document.querySelector('#selected-project');
    const projectsH1 = document.querySelector('header>h1');
    projectsH1.textContent = [...selectedProject.children][2].textContent;
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

  const cancelAddBtns = function(action) {
    const cancelButton = document.createElement('button');
    const confirmButton = document.createElement('button');

    cancelButton.textContent = 'Cancel';
    cancelButton.classList.add('btn-project-control-action');
    confirmButton.textContent = action;
    confirmButton.classList.add('btn-project-control-action');

    return [cancelButton, confirmButton];
  }

  const addProjectContainer = function() {
    const addProjectContainer = document.createElement('div');
    const input = document.createElement('input');
    const [cancelButton, addButton] = cancelAddBtns('Add');

    addProjectContainer.id = 'add-project-container';
    addProjectContainer.classList.add('project-control-action-container');
    input.attributes.type = 'text';
    addProjectContainer.appendChild(input);
    addProjectContainer.appendChild(cancelButton);
    addProjectContainer.appendChild(addButton);

    addProjectContainer.style.display = 'none';
    return addProjectContainer;
  }

  const editProjectContainer = function() {
    const editProjectContainer = document.createElement('div');
    const [cancelButton, addButton] = cancelAddBtns('Edit');

    editProjectContainer.id = 'edit-project-container';
    editProjectContainer.classList.add('project-control-action-container');
    editProjectContainer.appendChild(cancelButton);
    editProjectContainer.appendChild(addButton);

    editProjectContainer.style.display = 'none';
    return editProjectContainer;
  }

  const removeProjectContainer = function() {
    const removeProjectContainer = document.createElement('div');
    const [cancelButton, addButton] = cancelAddBtns('Remove');

    removeProjectContainer.id = 'remove-project-container';
    removeProjectContainer.classList.add('project-control-action-container');
    removeProjectContainer.appendChild(cancelButton);
    removeProjectContainer.appendChild(addButton);

    removeProjectContainer.style.display = 'none';
    return removeProjectContainer;
  }

  const projectsList = function(todos) {
    todos.list.forEach(project => {
      const projectContainer = document.createElement('div');
      const checkbox = document.createElement('input');
      const radio = document.createElement('input');
      const nameP = document.createElement('p');
      const numberTodosP = document.createElement('p');
     
      projectContainer.classList.add('project-container');
      checkbox.setAttribute('type', 'checkbox');
      checkbox.classList.add('checkbox-remove-project');
      radio.setAttribute('type', 'radio');
      radio.classList.add('radio-default-project');
      nameP.textContent = project.name;
      nameP.classList.add('project-name');
      numberTodosP.textContent = project.todos.length;


      if (project['default project']) {
        projectContainer.id = 'selected-project';
        radio.checked = true;
      }

      checkbox.style.display = 'none';
      radio.style.display = 'none';

      projectContainer.appendChild(checkbox);
      projectContainer.appendChild(radio);
      projectContainer.appendChild(nameP);
      projectContainer.appendChild(numberTodosP);
      projectsListContainer.appendChild(projectContainer);
    });
    
    projectsListContainer.appendChild(projectControls());
    projectsListContainer.appendChild(addProjectContainer());
    projectsListContainer.appendChild(editProjectContainer());
    projectsListContainer.appendChild(removeProjectContainer());

    return projectsListContainer;
  }

  const clearProjectsList = function() {
    [...projectsListContainer.children].forEach(child => child.remove());
  }

  const projectsHandler = function(todos) {
    const projectsContainer = document.createElement('section');
    projectsContainer.appendChild(header(todos));
    projectsContainer.appendChild(projectsList(todos));

    return projectsContainer;
  }

  const projectsEventHandlers = function(todos) {
    const projectContainers = [...document.querySelectorAll('.project-container')];
    const projectControls = document.querySelector('#project-controls');

    const projectControlActionBtns = document.querySelectorAll('.btn-project-control-action');
    const menu = document.querySelector('#menu');
    const closeMenuBtn = document.querySelector('#close-menu-btn');
    const removeProjectCheckboxes = document.querySelectorAll('.checkbox-remove-project');
    const defaultProjectRadios = document.querySelectorAll('.radio-default-project');

    // display projects list
    menu.addEventListener('click', () => {
      projectsListContainer.style.display = 'block';
      menu.style.display = 'none';
      closeMenuBtn.style.display = 'block';
    });

    // hide projects list
    closeMenuBtn.addEventListener('click', () => {
      projectsListContainer.style.display = 'none';
      menu.style.display = 'block';
      closeMenuBtn.style.display = 'none';
      [...removeProjectCheckboxes, ...defaultProjectRadios].forEach(input => input.style.display = 'none');
    });

    // select a project from the project list 
    projectContainers.forEach(projectContainer => {
      projectContainer.addEventListener('click', () => {
        if (projectControls.style.display === 'none') return;
        
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
            [...removeProjectCheckboxes].forEach(checkbox => checkbox.style.display = 'inline');
            break;
          case 'Edit':
            document.querySelector('#edit-project-container').style.display = 'flex';
            projectContainers.forEach(projectContainer => {
              const projectElements = [...projectContainer.children];
              const input = document.createElement('input');
              input.setAttribute('type', 'text');
              input.value = projectElements[2].textContent;
              projectContainer.removeChild(projectElements[2]);
              projectContainer.insertBefore(input, projectElements[projectElements.length - 1]);
            });
            [...defaultProjectRadios].forEach(radio => radio.style.display = 'inline');
            break;
          case 'Add':
            document.querySelector('#add-project-container').style.display = 'flex';
            break;
        }
      });
    });

    // submit one of the project controls | hide action specifics and show action controls
    [...projectControlActionBtns, closeMenuBtn].forEach(button => {
      const addProjectContainer = document.querySelector('#add-project-container');
      const editProjectContainer = document.querySelector('#edit-project-container');
      const removeProjectContainer = document.querySelector('#remove-project-container');

      button.addEventListener('click', () => {
        if (editProjectContainer.style.display === 'flex') {
          // change to update based off of todos array
          projectContainers.forEach((projectContainer, i) => {
            const projectElements = [...projectContainer.children];
            const p = document.createElement('p');
            p.textContent = button.textContent === 'Edit' ? projectElements[2].value : todos.list[i].name;
            projectContainer.removeChild(projectElements[2]);
            projectContainer.insertBefore(p, projectElements[projectElements.length - 1]);
          });
        }

        if (addProjectContainer.style.display === 'flex') {
          if (button.textContent === 'Add') {
            clearProjectsList();
            [...projectsList(todos).children].forEach(projectContainer => {
              projectsListContainer.appendChild(projectContainer);
            });
            projectsEventHandlers(todos);
          } else {
            // clear input
          }
        }

        if (removeProjectContainer.style.display === 'flex') {
          const checkboxes = [...document.querySelectorAll('.checkbox-remove-project')];
          if (button.textContent === 'Remove') {
            // remove checked projects from todos array
            const removeIndices = checkboxes.map(checkbox => {
              if (checkbox.checked) {
                return [...(checkbox.parentElement.parentElement).children].indexOf(checkbox.parentElement);
              }
            }).filter(el => el || el === 0).reverse();
            
            removeIndices.forEach(index => todos.list.splice(index, 1));
          } else {
            // clear checkboxes
          }
        }

        projectControls.style.display = 'flex';
        [...document.querySelectorAll('.project-control-action-container')].forEach(container => {
          container.style.display = 'none';
        });
        [...removeProjectCheckboxes, ...defaultProjectRadios].forEach(input => input.style.display = 'none');
      });
    });
  }

  return { projectsHandler, updateHeaderTitle, projectsEventHandlers };
})();

export default projectsContainer;
