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

    [projectsH2, projectsListContainer].forEach(el => projectsContainer.appendChild(el));
    document.querySelector('body').appendChild(projectsContainer);
  }
  
  const renderProjectsList = projects => {
    for (let projectName in projects) {
      const p = document.createElement('p');
      p.textContent = projectName;
      projectsListContainer.appendChild(p);
    }
  }

  const clearProjectsList = () => {
    while (projectsListContainer.firstChild) {
      projectsListContainer.removeChild(projectsListContainer.firstChild);
    }
  }

  const addProject = projectName => {
    const p = document.createElement('p');

    p.textContent = projectName;
    projectsListContainer.appendChild(p);
  }

  const removeProject = projectName => {
    const projectP = [...projectsListContainer.children].filter(el => el.textContent === projectName)[0];
    projectsListContainer.removeChild(projectP);
  }

  return { initialRender, renderProjectsList, addProject, removeProject }
})();

export default projectsContainer;
