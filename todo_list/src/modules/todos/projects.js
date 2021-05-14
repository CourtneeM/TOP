class Project {
  constructor(name) {
    this.name = name;
    this.todos = [];
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
};

export default Project;
