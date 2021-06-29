class TodoList {
  constructor(list) {
    this.list = list;
  }

  addTodo(todo) {
    this.list.push(todo);
  }

  removeTodo(index) {
    this.list.splice(index, 1);
  }
}

export default TodoList;
