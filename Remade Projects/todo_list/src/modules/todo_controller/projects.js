import TodoList from './todo_list';

class Projects {
  addList(listName, list = new TodoList()) {
    this[listName] = list;
  }

  editListName(oldListName, newListName) {
    const oldListValues = this[oldListName];
    this.removeList(oldListName);
    this.addList(newListName, oldListValues);
  }

  removeList(listName) {
    delete this[listName];
  }
}

export default Projects;
