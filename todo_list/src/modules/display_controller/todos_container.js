import '../../styles/todos/todos.css';

const todosContainer = (() => {
  const todosListContainer = document.createElement('div');
  todosListContainer.id = 'todos-list-container';

  const todosControlsContainers = (function() {
    const todosControlsContainer = document.createElement('div');
    todosControlsContainer.id = 'todos-controls-container';

    const todosControls = function() {
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
  
      return todosControlBtnsContainer;
    }

    const cancelAddBtns = function(action) {
      const cancelBtn = document.createElement('button');
      const actionBtn = document.createElement('button');
  
      cancelBtn.textContent = 'Cancel';
      cancelBtn.classList.add('btn-todos-control-action');
      actionBtn.textContent = action;
      actionBtn.classList.add('btn-todos-control-action');
  
      return [cancelBtn, actionBtn];
    }

    const removeTodoContainer = function () {
      const removeTodoContainer = document.createElement('div');
      const [cancelBtn, removeBtn] = cancelAddBtns('Remove');
  
      removeTodoContainer.id = 'remove-todo-container';
      removeTodoContainer.classList.add('todos-control-action-container');
      removeTodoContainer.appendChild(cancelBtn);
      removeTodoContainer.appendChild(removeBtn);
  
      removeTodoContainer.style.display = 'none';
      return removeTodoContainer;
    }

    const editTodoContainer = function() {
      const editTodoContainer = document.createElement('div');
      const [cancelBtn, editBtn] = cancelAddBtns('Edit');
      
      editTodoContainer.id = 'edit-todo-container';
      editTodoContainer.classList.add('todos-control-action-container');
      editTodoContainer.appendChild(cancelBtn);
      editTodoContainer.appendChild(editBtn);
  
      editTodoContainer.style.display = 'none';
      return editTodoContainer;
    }

    const addTodoContainer = function() {
      const addTodoContainer = document.createElement('div');
      const [cancelBtn, addBtn] = cancelAddBtns('Add');
  
      addTodoContainer.id = 'add-todo-container';
      addTodoContainer.classList.add('todos-control-action-container');
      addTodoContainer.appendChild(cancelBtn);
      addTodoContainer.appendChild(addBtn);
  
      addTodoContainer.style.display = 'none';
      return addTodoContainer;
    }

    const todosControlsHandler = function() {
      todosControlsContainer.appendChild(todosControls());
      todosControlsContainer.appendChild(removeTodoContainer());
      todosControlsContainer.appendChild(editTodoContainer());
      todosControlsContainer.appendChild(addTodoContainer());

      return todosControlsContainer;
    }

    return { todosControlsHandler }
  })();

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
    todosListContainer.appendChild(todosControlsContainers.todosControlsHandler());

    return todosListContainer;
  }

  const todosEventHandlers = function(todos, Todo) {
    const todosControlsBtnsContainer = document.querySelector('#todos-control-btns-container');
    const todosControlBtns = [...todosControlsBtnsContainer.children];
    const todosControlActionBtns = [...document.querySelectorAll('.btn-todos-control-action')];

    // Todo Controls Buttons 
    todosControlBtns.forEach(control => {
      control.addEventListener('click', () => {
        todosControlsBtnsContainer.style.display = 'none';
        switch (control.textContent) {
          case 'Remove':
            document.querySelector('#remove-todo-container').style.display = 'flex';
            break;
          case 'Edit':
            document.querySelector('#edit-todo-container').style.display = 'flex';
            break;
          case 'Add':
            document.querySelector('#add-todo-container').style.display = 'flex';
            break;
        }
      });
    });

    todosControlActionBtns.forEach(actionBtn => {
      const removeTodoContainer = document.querySelector('#remove-todo-container');
      const editTodoContainer = document.querySelector('#edit-todo-container');
      const addTodoContainer = document.querySelector('#add-todo-container');

      actionBtn.addEventListener('click', () => {
        if (removeTodoContainer.style.display === 'flex') {
          if (actionBtn.textContent === 'Remove') {
            console.log(todos);
          }
        }
        
        if (editTodoContainer.style.display === 'flex') {
          if (actionBtn.textContent === 'Edit') {
            
          }
        }
        
        if (addTodoContainer.style.display === 'flex') {
          if (actionBtn.textContent === 'Add') {
            
          }
        }
      });      
    });
  }

  return { todosHandler, displayTodos, clearTodos, todosEventHandlers }
})();

export default todosContainer;
