class Todo {
  constructor(title, description, dueDate, priority, notes, completed = false) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.notes = notes;
    this.completed = completed;
  }

  editTitle(newTitle) {
    this.title = newTitle;
  }

  editDescription(newDescription) {
    this.description = newDescription;
  }

  editDueDate(newDueDate) {
    this.dueDate = newDueDate;
  }

  editPriority(newPriority) {
    this.priority = newPriority;
  }

  editNotes(newNotes) {
    this.notes = newNotes;
  }

  toggleCompleted() {
    this.completed = !this.completed;
  }
}

export default Todo;
