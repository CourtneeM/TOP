class Projects {
  add(listName, list) {
    this[listName] = list;
  }

  remove(listName) {
    delete this[listName];
  }
}

export default Projects;
