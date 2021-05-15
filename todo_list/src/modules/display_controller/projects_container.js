const projectsContianer = (() => {

  const header = function(todos) {
    const projectsHeader = document.createElement('header');
    const projectsH1 = document.createElement('h1');
    // console.log(todos);

    // projectsH1.textContent = todos.list['default project'];
    projectsHeader.appendChild(projectsH1);

    return projectsHeader
  }

  return { header };
})();

export default projectsContianer;
