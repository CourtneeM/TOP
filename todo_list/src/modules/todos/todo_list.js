class TodoList {
  constructor() {
    this.list = {};
  }

  displayList() {
    return this.list;
  }

  displayProjects() {
    return Object.keys(this.list);
  }

  addProject(project) {
    this.list[project.name] = project.todos;
  }

  deleteProject(project) {
    delete this.list[project];
  }

  editProjectName([project, newProjectName]) {
    this.list[newProjectName] = this.list[project];
    delete this.list[project];
  }
}

export default TodoList;
