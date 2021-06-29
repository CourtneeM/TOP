class TodoList {
  constructor(list) {
    this.list = list;
  }

  add(todo) {
    this.list.push(todo);
  }

  remove(index) {
    this.list.splice(index, 1);
  }

  edit(index, todo) {
    this.list.splice(index, 1, todo);
  }
}

export default TodoList;
