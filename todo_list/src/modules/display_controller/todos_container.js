import '../../styles/todos/todos.css';

const todosContainer = (() => {
  const todosDisplayOptions = function() {
    // add sort and filter options here
  }

  const displayTodos = function(currentProject) {
    const todosContainer = document.createElement('div');
    todosContainer.id = 'todos-container';

    currentProject.todos.forEach(todo => {
      const todoContainer = document.createElement('div');
      todoContainer.classList.add('todo-container');

      for (let prop in todo) {
        if (prop === 'completed') {
          const checkbox = document.createElement('input');
          checkbox.type = 'checkbox';
          todoContainer.appendChild(checkbox);
        } else {
          const p = document.createElement('p');
          p.textContent = todo[prop];
          todoContainer.appendChild(p);
        }
      }

      todosContainer.appendChild(todoContainer);
    });

    return todosContainer;
  }

  const displayTodosContainer = function(todos) {
    const currentProject = todos.list.filter(project => project['default project'])[0];
    const todosContainer = document.createElement('section');
    
    todosContainer.appendChild(displayTodos(currentProject));

    return todosContainer;
  }

  return { displayTodosContainer }
})();

export default todosContainer;
