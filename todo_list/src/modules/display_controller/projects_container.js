import '../../styles/projects/projects.css';

const projectsContainer = (() => {
  const projectsListContainer = document.createElement('div');
  let selectedProjectContainer = document.querySelector('#selected-project');
  let selectedProjectName;
  projectsListContainer.id = 'projects-list-container';

  const header = function(todos) {
    const projectsHeader = document.createElement('header');
    const projectsH1 = document.createElement('h1');
    const menu = document.createElement('i');
    const closeMenuBtn = document.createElement('i');

    projectsH1.id = 'selected-project-name';
    projectsH1.textContent = todos.list.filter(project => project['default project'])[0].name;
    menu.id = 'menu';
    menu.classList.add("fas", "fa-bars");
    closeMenuBtn.id = 'close-menu-btn';
    closeMenuBtn.classList.add("fas", "fa-times");
    closeMenuBtn.style.display = 'none';

    projectsHeader.appendChild(projectsH1);
    projectsHeader.appendChild(menu);
    projectsHeader.appendChild(closeMenuBtn);
    
    selectedProjectName = projectsH1.textContent;
    return projectsHeader
  }

  const updateHeaderTitle = function() {
    const selectedProject = document.querySelector('#selected-project');
    const projectsH1 = document.querySelector('header>h1');

    if (selectedProject.classList.value === 'project-container') {
      projectsH1.textContent = [...selectedProject.children][2].textContent; 
    } else {
      projectsH1.textContent = 'Todo List App';
    }

    selectedProjectName = projectsH1.textContent;
  }

  const projectControls = function() {
    const projectControlsContainer = document.createElement('div');
    projectControlsContainer.id = "project-controls-container";
    ['Remove', 'Edit', 'Add'].forEach(control => {
      const p = document.createElement('p');
      p.textContent = control;
      projectControlsContainer.appendChild(p);
    });

    return projectControlsContainer;
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
      radio.setAttribute('name', 'default-project');
      radio.classList.add('radio-default-project');
      nameP.textContent = project.name;
      nameP.classList.add('project-name');
      numberTodosP.textContent = project.todos.length;


      if (project['default project']) {
        radio.checked = true;

        if (!selectedProjectContainer) {
          selectedProjectContainer = projectContainer;
          selectedProjectContainer.id = 'selected-project';
        }
      }

      checkbox.style.display = 'none';
      radio.style.display = 'none';

      projectContainer.appendChild(checkbox);
      projectContainer.appendChild(radio);
      projectContainer.appendChild(nameP);
      projectContainer.appendChild(numberTodosP);

      if (selectedProjectName === projectContainer.querySelector('.project-name').textContent) {
        selectedProjectContainer = projectContainer;
        selectedProjectContainer.id = 'selected-project';
      }

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
    projectsContainer.id = 'projects-section';

    projectsContainer.appendChild(header(todos));
    projectsContainer.appendChild(projectsList(todos));

    return projectsContainer;
  }

  const projectsEventHandlers = function(todos, Project) {
    const projectContainers = [...document.querySelectorAll('.project-container')];
    const projectControlsContainer = document.querySelector('#project-controls-container');
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
        if (projectControlsContainer.style.display === 'none') return;
        
        selectedProjectContainer.removeAttribute('id');
        selectedProjectContainer = projectContainer;
        selectedProjectContainer.id = 'selected-project';
      });
    });
    
    // display one of the project controls on click
    [...projectControlsContainer.children].forEach(button => {
      button.addEventListener('click', () => {
        projectControlsContainer.style.display = 'none';
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
              input.classList.add('input-edit-project-name');
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
          const inputs = [...document.querySelectorAll('.input-edit-project-name')];
          const radioBtns = [...document.querySelectorAll('.radio-default-project')];

          if (button.textContent === 'Edit') {
            if (!inputs.some(input => input.value === '')) {
              // update todos.list project names
              inputs.forEach((input, i) => todos.list[i].name = input.value.trim());

              // update default project
              const newDefaultProjectIndex = radioBtns.map(btn => {
                if (btn.checked) {
                  return [...btn.parentElement.parentElement.children].indexOf(btn.parentElement);
                }
              }).filter(index => index || index === 0)[0];
              
              todos.list.forEach((project, i) => {
                if (i === newDefaultProjectIndex) {
                  project['default project'] = true;
                } else {
                  project['default project'] = false;
                }
              });

              document.querySelector('#selected-project').removeAttribute('id');
              radioBtns[newDefaultProjectIndex].parentElement.id = 'selected-project';
            } else {
              inputs.forEach(input => {
                input.setCustomValidity('Field required');
                input.reportValidity();
              });
            }
          }
        }

        if (addProjectContainer.style.display === 'flex') {
          if (button.textContent === 'Add') {
            const input = addProjectContainer.querySelector('input');

            if (!todos.list.some(project => project.name === input.value)) {
              todos.addProject(new Project(input.value));
            } else {
              input.setCustomValidity('Cannot have duplicate project names');
              input.reportValidity();
            }
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
            }).filter(index => index || index === 0).reverse();
            
            removeIndices.forEach(index => todos.list.splice(index, 1));

            // set new default project, if any projects in list, if current one is removed
            if (todos.list.some(todo => !todo['default project'])) {
              if (todos.list.length > 0) {
                todos.list[0]['default project'] = true;
                document.querySelector('#selected-project').removeAttribute('id');
                [...projectsListContainer.children][0].id = 'selected-project';
              }
            }

            if (todos.list.length <= 0) {
              document.querySelector('#selected-project').removeAttribute('id');
              projectsListContainer.id = 'selected-project';
            }
          }
        }

        // If project name is duplicate, return so input error message displays
        if (addProjectContainer.style.display === 'flex') {
          if (!todos.list.some(project => project.name === document.querySelector('#add-project-container').querySelector('input').value)) return;
        }

        if (editProjectContainer.style.display === 'flex') {
          if ([...document.querySelectorAll('.project-container')].some(projectContainer => {
            return [...projectContainer.querySelectorAll('input[type="text"]')].some(input => input.value === '');
          })) return;
        }

        clearProjectsList();
        [...projectsList(todos).children].forEach(projectContainer => {
          projectsListContainer.appendChild(projectContainer);
        });
        projectsEventHandlers(todos, Project);

        projectControlsContainer.style.display = 'flex';
        [...document.querySelectorAll('.project-control-action-container')].forEach(container => {
          container.style.display = 'none';
        });
        [...removeProjectCheckboxes, ...defaultProjectRadios].forEach(input => input.style.display = 'none');
      });
    });

  }

  return { projectsHandler, projectsList, clearProjectsList, updateHeaderTitle, projectsEventHandlers };
})();

export default projectsContainer;
