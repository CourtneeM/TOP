import '../../styles/projects/projects.css';

const projectsContainer = (() => {
  const projectsListContainer = document.createElement('div');
  let selectedProjectIndex = 0;
  let selectedProjectContainer;
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
    const projectsH1 = document.querySelector('header>h1');

    if ([...projectsListContainer.querySelectorAll('.project-container')].length > 0) {
      projectsH1.textContent = selectedProjectName; 
    } else {
      projectsH1.textContent = 'Todo List App';
    }
  }

  const updateSelectedProject = function() {
    if ([...projectsListContainer.children].length === 0) {
      updateHeaderTitle();
    } else {
      if (selectedProjectContainer) {
        selectedProjectContainer.removeAttribute('id');
      }

      selectedProjectContainer = [...projectsListContainer.children][selectedProjectIndex];
      selectedProjectName = selectedProjectContainer.querySelector('.project-name').textContent;
      selectedProjectContainer.id = 'selected-project';
    }
  }

  const updateProjectTodoCount = function(todos) {
    const projectTodoCount = [...document.querySelectorAll('.project-todo-count')];
    projectTodoCount.forEach((todoCount, index) => todoCount.textContent = todos.list[index].todos.length);
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
      numberTodosP.classList.add('project-todo-count');


      if (project['default project']) {
        radio.checked = true;
      }

      checkbox.style.display = 'none';
      radio.style.display = 'none';

      projectContainer.appendChild(checkbox);
      projectContainer.appendChild(radio);
      projectContainer.appendChild(nameP);
      projectContainer.appendChild(numberTodosP);

      projectsListContainer.appendChild(projectContainer);

      if (!selectedProjectContainer) {
        updateSelectedProject();
      }
    });

    if ([...projectsListContainer.children].length > 0) {
      const projectNames = [...projectsListContainer.querySelectorAll('.project-name')].map(projectName => projectName.textContent);

      if (projectNames.some(projectName => projectName === selectedProjectName)) {
        selectedProjectIndex = projectNames.indexOf(selectedProjectName);
        updateSelectedProject();
      } else {
        selectedProjectIndex = 0;
        updateSelectedProject();
      }
    } else {
      updateSelectedProject();
    }
    
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
    projectContainers.forEach((projectContainer, index) => {
      projectContainer.addEventListener('click', () => {
        if (projectControlsContainer.style.display === 'none') return;
        
        selectedProjectIndex = index;
        updateSelectedProject();
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

              selectedProjectName = document.querySelector('#selected-project').querySelector('.input-edit-project-name').value;
              document.querySelector('#selected-project').removeAttribute('id');
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
              }
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

  return { projectsHandler, projectsList, clearProjectsList, updateHeaderTitle, updateProjectTodoCount, projectsEventHandlers };
})();

export default projectsContainer;
