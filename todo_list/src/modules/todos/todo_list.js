class TodoList {
  constructor() {
    this.list = [];
  }

  displayList() {
    return this.list;
  }

  displayProjectNames() {
    return this.list.map(project => project.name);
  }

  addProject(project) {
    this.list.push(project);
  }

  deleteProject(index) {
    this.list.splice(index, 1);
  }

  editProjectName(index, newProjectName) {
    this.list[index].name = newProjectName;
  }
}

export default TodoList;
