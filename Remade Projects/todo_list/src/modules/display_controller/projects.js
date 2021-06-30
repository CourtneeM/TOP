const projectsContainer = (() => {
  const projectsContainer = document.createElement('section');
  const projectsListContainer = document.createElement('div');
  projectsContainer.id = 'projects-container';
  
  projectsListContainer.id = 'projects-list-container';
  const initialRender = projects => {
    const projectsH2 = document.createElement('h2');
    
    projectsH2.textContent = 'Projects';

    for (let projectName in projects) {
      const p = document.createElement('p');
      p.textContent = projectName;
      projectsListContainer.appendChild(p);
    }

    [projectsH2, projectsListContainer].forEach(el => projectsContainer.appendChild(el));
    return projectsContainer;
  }
  
  const rerenderProjects = projects => {
    while (projectsListContainer.firstChild) {
      projectsListContainer.removeChild(projectsListContainer.firstChild);
    }

    for (let projectName in projects) {
      const p = document.createElement('p');
      p.textContent = projectName;
      projectsListContainer.appendChild(p);
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

  return { initialRender, rerenderProjects, addProject, removeProject }
})();

export default projectsContainer;
