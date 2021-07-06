import '../../styles/projects_container/style.css';

const projectsContainer = (() => {
  const projectsContainer = document.createElement('section');
  const projectsListContainer = document.createElement('div');
  projectsContainer.id = 'projects-container';
  projectsListContainer.id = 'projects-list-container';

  const initialRender = projects => {
    const projectsH2 = document.createElement('h2');
    projectsH2.textContent = 'Projects';

    renderProjectsList(projects);

    projectsContainer.appendChild(projectsH2);
    renderProjectsList();
    renderNewProjectContainer();

    document.querySelector('body').appendChild(projectsContainer);
  }
  
  const renderProjectsList = (projects) => {
    for (let projectName in projects) {
      const projectContainer = document.createElement('div');
      const projectNameP = document.createElement('p');
      const editBtn = document.createElement('i');

      projectContainer.classList.add('project-container');
      editBtn.classList.add('far', 'fa-edit', 'edit-project-btn');
      projectNameP.classList.add('project-name');
      projectNameP.textContent = projectName;

      [projectNameP, editBtn].forEach(el => projectContainer.appendChild(el));
      projectsListContainer.appendChild(projectContainer);
    }

    projectsContainer.appendChild(projectsListContainer);
  }

  const renderNewProjectContainer = () => {
    const newProjectContainer = document.createElement('div');
    const newProjectBtn = document.createElement('button');

    newProjectContainer.id = 'new-project-container';
    newProjectBtn.id = 'new-project-btn';
    newProjectBtn.textContent = 'New Project';

    newProjectContainer.appendChild(newProjectBtn);
    projectsContainer.appendChild(newProjectContainer);
  }

  const clearProjectsList = () => {
    while (projectsListContainer.firstChild) {
      projectsListContainer.removeChild(projectsListContainer.firstChild);
    }
  }

  const editProject = (() => {  
    const renderEdit = selectedProject => {
      const selectedProjectNameP = selectedProject.querySelector('.project-name');
      const projectNameInput = document.createElement('input');
      const confirmBtn = document.createElement('i');
      const cancelBtn = document.createElement('i');
      const deleteBtn = document.createElement('i');

      confirmBtn.classList.add('far', 'fa-check-square', 'confirm-edit-project-btn');
      cancelBtn.classList.add('far', 'fa-window-close', 'cancel-edit-project-btn');
      deleteBtn.classList.add('far', 'fa-trash-alt', 'delete-project-btn');
      
      projectNameInput.value = selectedProjectNameP.textContent;
      
      while (selectedProject.firstChild) {
        selectedProject.removeChild(selectedProject.firstChild);
      }

      [projectNameInput, confirmBtn, cancelBtn, deleteBtn].forEach(el => selectedProject.appendChild(el));
    }

    const renderConfirmCancelEdit = (selectedProject, selectedProjectName = null) => {
      const newProjectNameP = document.createElement('p');
      const editBtn = document.createElement('i');

      newProjectNameP.classList.add('project-name');
      editBtn.classList.add('far', 'fa-edit', 'edit-project-btn');
      newProjectNameP.textContent = selectedProjectName ? selectedProjectName : selectedProject.querySelector('input').value;
      
      while (selectedProject.firstChild) {
        selectedProject.removeChild(selectedProject.firstChild);
      }

      [newProjectNameP, editBtn].forEach(el => selectedProject.appendChild(el));
    }

    return { renderEdit, renderConfirmCancelEdit }
  })();

  const newProject = (() => {
    const renderNewProject = () => {
      const newProjectContainer = document.querySelector('#new-project-container');
      const newProjectInput = document.createElement('input');
      const confirmBtn = document.createElement('i');
      const cancelBtn = document.createElement('i');
    
      confirmBtn.id = 'confirm-new-project-btn';
      cancelBtn.id = 'cancel-new-project-btn';
      confirmBtn.classList.add('far', 'fa-check-square');
      cancelBtn.classList.add('far', 'fa-window-close');

      newProjectContainer.removeChild(newProjectContainer.firstChild);

      [newProjectInput, confirmBtn, cancelBtn].forEach(el => newProjectContainer.appendChild(el));
    }

    const renderConfirmCancelNewProject = (newProjectName) => {
      const newProjectContainer = document.querySelector('#new-project-container');
      const newProjectBtn = document.createElement('button');

      newProjectContainer.id = 'new-project-container';
      newProjectBtn.id = 'new-project-btn';
      newProjectBtn.textContent = 'New Project';
      
      while (newProjectContainer.firstChild) {
        newProjectContainer.removeChild(newProjectContainer.firstChild);
      }

      if (newProjectName) {
        const newProjectContainer = document.createElement('div');
        const newProjectNameP = document.createElement('p');
        const editBtn = document.createElement('i');

        newProjectContainer.classList.add('project-container');
        editBtn.classList.add('far', 'fa-edit', 'edit-project-btn');
        newProjectNameP.classList.add('project-name');
        newProjectNameP.textContent = newProjectName;

        [newProjectNameP, editBtn].forEach(el => newProjectContainer.appendChild(el));
        document.querySelector('#projects-list-container').appendChild(newProjectContainer);
      }

      newProjectContainer.appendChild(newProjectBtn);
    }

    return { renderNewProject, renderConfirmCancelNewProject }
  })();

  const deleteProject = selectedProjectContainer => {
    projectsListContainer.removeChild(selectedProjectContainer);
  }

  return { initialRender, renderProjectsList, editProject, newProject, deleteProject }
})();

export default projectsContainer;
