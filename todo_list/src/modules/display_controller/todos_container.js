import '../../styles/todos/todos.css';

const todosContainer = (() => {
  const todosListContainer = document.createElement('div');
  todosListContainer.id = 'todos-list-container';

  const todosControls = function() {
    const todosControlsContainer = document.createElement('div');
    
    // const optionsContainer = document.createElement('div');
    // ['Filter Dates', 'Sort', 'Sort Order'].forEach(optionChoice => {
    //   const filterDatesBy = ['Today', 'Tomorrow', 'Next 7 Days', 'Next 2 Weeks', 'This Month'];
    //   const sortBy = ['Order', 'Priority', 'Due Date'];
    //   const sortOrder = ['Ascending', 'Descending'];

    //   const optionsDropdown = document.createElement('input');
    //   optionsDropdown.setAttribute('type', 'dropdown');

      // if ([].includes(optionChoice))

      // });

    const todosControlBtnsContainer = document.createElement('div');
    todosControlBtnsContainer.id = 'todos-control-btns-container';
    ['Remove', 'Edit', 'Add'].forEach(control => {
      const controlP = document.createElement('p');
      controlP.textContent = control;
      todosControlBtnsContainer.appendChild(controlP);
    });
    
    // todosControlsContainer.appendChild(options)
    todosControlsContainer.appendChild(todosControlBtnsContainer);

    return todosControlsContainer;
  }

  const displayTodos = function(todos) {
    if (todos.list.length <= 0) return;

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

      todosListContainer.appendChild(todoContainer);
    });

    return todosListContainer;
  }

  const clearTodos = function() {
    const todosListContainer = document.querySelector('#todos-list-container');
    while(todosListContainer.firstChild) {
      todosListContainer.removeChild(todosListContainer.firstChild);
    }
  }
  
  const todosHandler = function(todos) {
    const todosListContainer = document.createElement('section');
    todosListContainer.id = 'todos-section';
    
    todosListContainer.appendChild(displayTodos(todos));
    todosListContainer.appendChild(todosControls());

    return todosListContainer;
  }

  return { todosHandler, displayTodos, clearTodos }
})();

export default todosContainer;
