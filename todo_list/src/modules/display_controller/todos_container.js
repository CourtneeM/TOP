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

      const todoInfoContainer = document.createElement('div');
      todoInfoContainer.classList.add('todo-info-container');
      for (let prop in todo) {
        if (prop === 'completed') {
          const checkbox = document.createElement('input');

          checkbox.classList.add('remove-todo-checkbox');
          checkbox.type = 'checkbox';
          checkbox.style.display = 'none';

          todoContainer.appendChild(checkbox);
        } else {
          const p = document.createElement('p');
          p.textContent = todo[prop];

          todoInfoContainer.appendChild(p);
        }
      }

      todoContainer.appendChild(todoInfoContainer);
      todosListContainer.appendChild(todoContainer);
    });

    return todosListContainer;
  }

  const clearTodos = function() {
    while(todosListContainer.firstChild) {
      todosListContainer.removeChild(todosListContainer.firstChild);
    }
  }

  const clearControlsContainer = function() {
    const todosControlsContainer = document.querySelector('#todos-controls-container');

    while (todosControlsContainer.firstChild) {
      todosControlsContainer.removeChild(todosControlsContainer.firstChild);
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
    const todoContainers = [...todosListContainer.children];
    const todoInfoContainers = [...document.querySelectorAll('.todo-info-container')];
    const removeTodoCheckboxes = [...document.querySelectorAll('.remove-todo-checkbox')];
    const todosControlsContainer = document.querySelector('#todos-controls-container');
    const todosControlsBtnsContainer = document.querySelector('#todos-control-btns-container');
    const todosControlBtns = [...todosControlsBtnsContainer.children];
    const todosControlActionBtns = [...document.querySelectorAll('.btn-todos-control-action')];
    const fieldNames = Object.keys(todos.list[0].todos[0]);

    // Todo Controls Buttons 
    todosControlBtns.forEach(control => {
      control.addEventListener('click', () => {
        todosControlsBtnsContainer.style.display = 'none';
        switch (control.textContent) {
          case 'Remove':
            document.querySelector('#remove-todo-container').style.display = 'flex';
            removeTodoCheckboxes.forEach(checkbox => checkbox.style.display = 'inline');
            break;
          case 'Edit':
            document.querySelector('#edit-todo-container').style.display = 'flex';
            todoInfoContainers.forEach(todoInfoContainer => {
              todoInfoContainer.removeAttribute('class');
              todoInfoContainer.classList.add('edit-todo-info-container');

              [...todoInfoContainer.children].forEach((field, index) => {
                const label = document.createElement('label');
                const input = document.createElement('input');
                
                label.textContent = ((fieldNames[index])[0].toUpperCase() + fieldNames[index].slice(1));
                input.setAttribute('type', 'text');
                input.classList.add('edit-todo-field-input');
                input.value = field.textContent;

                label.appendChild(input);
                todoInfoContainer.replaceChild(label, field);
              });
            });
            // priority should be a drop down, 1-5
            break;
          case 'Add':
            document.querySelector('#add-todo-container').style.display = 'flex';
            // create a blank todo container with the inputs in the place of text spots
            // priority should be a drop down, 1-5
            break;
        }
      });
    });

    todosControlActionBtns.forEach(actionBtn => {
      const selectedProjectName = document.querySelector('#selected-project-name').textContent;
      const selectedProject = todos.list.filter(project => project.name === selectedProjectName)[0];
      const removeTodoContainer = document.querySelector('#remove-todo-container');
      const editTodoContainer = document.querySelector('#edit-todo-container');
      const addTodoContainer = document.querySelector('#add-todo-container');

      actionBtn.addEventListener('click', () => {
        if (removeTodoContainer.style.display === 'flex') {
          if (actionBtn.textContent === 'Remove') {
            const removeIndices = removeTodoCheckboxes.map(checkbox => {
              if (checkbox.checked) {
                console.log(todos.list);
                return [...checkbox.parentElement.parentElement.children].indexOf(checkbox.parentElement);
              }
            }).filter(index => index || index === 0).reverse();

            removeIndices.forEach(index => selectedProject.deleteTodo(index));
          }
        }
        
        if (editTodoContainer.style.display === 'flex') {
          if (actionBtn.textContent === 'Edit') {
            const newValues = [...document.querySelectorAll('.edit-todo-info-container')].map(todoContainer => {
              return [...todoContainer.children].map(label => label.querySelector('input').value);
            });

            selectedProject.todos.forEach((todo, todoIndex) => {
              fieldNames.forEach((field, fieldIndex) => {
                todo[field] = newValues[todoIndex][fieldIndex];
              });
            });
          }

          [...todoInfoContainers].forEach(todoInfoContainer => {
            todoInfoContainer.removeAttribute('class');
            todoInfoContainer.classList.add('todo-info-container');
          });
        }
        
        if (addTodoContainer.style.display === 'flex') {
          if (actionBtn.textContent === 'Add') {
            // todos.list.forEach(project => {
            //   if (project.name === selectedProjectName) {
            //     project.addTodo(new Todo(...newValues));
            //   }
            // });
          }
        }

        // rerender todos and controls, add event listeners back
        clearTodos();
        clearControlsContainer();
        [...displayTodos(todos).children].forEach(todoContainer => {
          todosListContainer.appendChild(todoContainer);
        });
        document.querySelector('#todos-section').appendChild(todosControlsContainers.todosControlsHandler());
        todosEventHandlers(todos, Todo);

        // rerender controls container, remove checkboxes and inputs from todos
        todosControlsBtnsContainer.style.display = 'flex';
        [...document.querySelectorAll('.todos-control-action-container')].forEach(container => {
          container.style.display = 'none';
        });
        [...removeTodoCheckboxes].forEach(input => input.style.display = 'none');
        // ...defaultProjectRadios
      });
    });
  }

  return { todosHandler, clearTodos, todosEventHandlers }
})();

export default todosContainer;
