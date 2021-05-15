class TodoList {
  constructor() {
    this.list = {};
  }

  displayList() {
    return this.list;
  }

  displayProjectNames() {
    return Object.keys(this.list);
  }

  addProject(project) {
    this.list[project.name] = project;
  }

  deleteProject(projectName) {
    delete this.list[projectName];
  }

  editProjectName(projectName, newProjectName) {
    this.list[newProjectName] = this.list[projectName];
    delete this.list[projectName];
  }
}

export default TodoList;
