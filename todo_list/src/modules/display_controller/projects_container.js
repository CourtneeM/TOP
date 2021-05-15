import '../../styles/projects/projects.css';

const projectsContianer = (() => {

  const header = function(todos) {
    const projectsHeader = document.createElement('header');
    const projectsH1 = document.createElement('h1');
    const menu = document.createElement('i');

    projectsH1.textContent = todos.list.filter(project => project['default project'])[0].name;
    menu.classList.add("fas", "fa-bars");

    projectsHeader.appendChild(projectsH1);
    projectsHeader.appendChild(menu);

    return projectsHeader
  }

  return { header };
})();

export default projectsContianer;
