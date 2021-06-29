class Projects {
  addList(listName, list) {
    this[listName] = list;
  }

  removeList(listName) {
    delete this[listName];
  }
}

export default Projects;
