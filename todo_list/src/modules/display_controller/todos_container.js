import '../../styles/todos/todos.css';

const todosContainer = (() => {
  const todosContainer = document.createElement('div');
  todosContainer.id = 'todos-container';

  const todosDisplayOptions = function() {
    // add sort and filter options here
  }

  const displayTodos = function(todos) {
    const currentProjectName = [...document.querySelector('#selected-project').children][2].textContent;
    const currentProjectTodos = todos.list.filter(project => project.name === currentProjectName)[0].todos;

    currentProjectTodos.forEach(todo => {
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

  const clearTodos = function() {
    const todosContainer = document.querySelector('#todos-container');
    while(todosContainer.firstChild) {
      todosContainer.removeChild(todosContainer.firstChild);
    }
  }
  
  const initialTodosRender = function(todos) {
    const todosContainer = document.createElement('section');

    todosContainer.appendChild(displayTodos(todos));

    return todosContainer;
  }

  return { initialTodosRender, displayTodos, clearTodos }
})();

export default todosContainer;
