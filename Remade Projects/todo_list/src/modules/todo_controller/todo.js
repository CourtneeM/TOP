class Todo {
  constructor(title, description, dueDate, priority, notes, completed = false) {
    this.title = title;
    this.description = description;
    this['due date'] = dueDate;
    this.priority = priority;
    this.notes = notes;
    this.completed = completed;
  }

  edit(newValues) {
    const [newTitle, newDescription, newDueDate, newPriority, newNotes, newCompleted] = [...newValues];
    this.title = newTitle;
    this.description = newDescription;
    this['due date'] = newDueDate;
    this.priority = newPriority;
    this.notes = newNotes;
    this.completed = newCompleted === 'Yes' ? true : false;
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
