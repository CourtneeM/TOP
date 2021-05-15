class Project {
  constructor(name, defaultProject = false) {
    this.name = name;
    this.todos = [];
    this['default project'] = defaultProject;
  }

  displayTodos() {
    return this.todos;
  }

  addTodo(todo) {
    this.todos.push(todo);
  }

  deleteTodo(index) {
    this.todos.splice(index, 1);
  }

  editTodo(index, prop, newValue) {
    this.todos[index][prop] = newValue;
  }

  toggleCompleted(index) {
    this.todos[index].completed = !this.todos[index].completed;
  }
};

export default Project;
