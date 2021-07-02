class Projects {
  addList(listName, list) {
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
