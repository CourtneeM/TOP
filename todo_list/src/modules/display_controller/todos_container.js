import '../../styles/todos/todos.css';

const todosContainer = (() => {
  const todosListContainer = document.createElement('div');
  todosListContainer.id = 'todos-list-container';

  const getSelectedProjectName = function() {
    const projectContainer = document.querySelector('#selected-project');
    return projectContainer.querySelector('.project-name') ? projectContainer.querySelector('.project-name').textContent
                                                           : projectContainer.querySelector('.input-edit-project-name').value;
  }

  const todosControlsContainers = (function() {
    const todosControlsContainer = document.createElement('div');
    todosControlsContainer.id = 'todos-controls-container';

    const sortFilterOptions = function() {
      const optionsContainer = document.createElement('div');
      const options = ['Filter Dates', 'Sort', 'Sort Order'];
      const filterDatesBy = ['Today', 'Tomorrow', 'Next 7 Days', 'Next 2 Weeks', 'This Month'];
      const sortBy = ['Order', 'Priority', 'Due Date'];
      const sortOrder = ['Descending', 'Ascending'];
      optionsContainer.id = 'sort-filter-options-container';
      
      options.forEach(optionChoice => {
        const optionsDropdown = document.createElement('select');

        switch (optionChoice) {
          case 'Filter Dates':
            filterDatesBy.forEach(el => {
              const option = document.createElement('option');
              option.classList.add('.filter-option');
              option.textContent = el;
              option.value = el;
              optionsDropdown.appendChild(option);
            });
            break;
          case 'Sort':
            sortBy.forEach(el => {
              const option = document.createElement('option');
              option.classList.add('.sort-option');
              option.textContent = el;
              option.value = el;
              optionsDropdown.appendChild(option);
            });
            break;
          case 'Sort Order':
            sortOrder.forEach(el => {
              const option = document.createElement('option');
              option.classList.add('.sort-by-option');
              option.textContent = el;
              option.value = el;
              optionsDropdown.appendChild(option);
            });
            break;
        }

        optionsContainer.appendChild(optionsDropdown);
      });

      return optionsContainer;
    }

    const todosControls = function() {
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
      todosControlsContainer.appendChild(sortFilterOptions());
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

    const currentProjectName = getSelectedProjectName();
    const currentProjectTodos = todos.list.filter(project => project.name === currentProjectName)[0].todos;

    currentProjectTodos.forEach(todo => {
      const todoContainer = document.createElement('div');
      todoContainer.classList.add('todo-container');

      const todoInfoContainer = document.createElement('div');
      todoInfoContainer.classList.add('todo-info-container');
      for (let prop in todo) {
        if (prop === 'completed') {
          const completeTodoCheckbox = document.createElement('input');
          const removeTodoCheckbox = document.createElement('input');

          completeTodoCheckbox.classList.add('complete-todo-checkbox');
          completeTodoCheckbox.type = 'checkbox';
          

          removeTodoCheckbox.classList.add('remove-todo-checkbox');
          removeTodoCheckbox.type = 'checkbox';
          removeTodoCheckbox.style.display = 'none';

          todoContainer.appendChild(completeTodoCheckbox);
          todoContainer.appendChild(removeTodoCheckbox);

          if (todo[prop]) {
            completeTodoCheckbox.checked = true;
            completeTodoCheckbox.parentElement.classList.add('completed-todo');
          }
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
    const selectedProjectName = document.querySelector('#selected-project-name').textContent;
    const selectedProject = todos.list.filter(project => project.name === selectedProjectName)[0];
    const fieldNames = ['title', 'description', 'dueDate', 'priority', 'notes', 'completed'];

    const todoInfoContainers = [...document.querySelectorAll('.todo-info-container')];
    const completeTodoCheckboxes = [...document.querySelectorAll('.complete-todo-checkbox')];
    const removeTodoCheckboxes = [...document.querySelectorAll('.remove-todo-checkbox')];
    const todosControlsBtnsContainer = document.querySelector('#todos-control-btns-container');
    const todosControlBtns = [...todosControlsBtnsContainer.children];
    const todosControlActionBtns = [...document.querySelectorAll('.btn-todos-control-action')];

    // Mark Todo Complete and strikethrough
    completeTodoCheckboxes.forEach(checkbox => {
      checkbox.addEventListener('click', () => {
        const todoContainerIndex = [...checkbox.parentElement.parentElement.children].indexOf(checkbox.parentElement);
        
        checkbox.parentElement.classList.toggle('completed-todo');
        selectedProject.toggleCompleted(todoContainerIndex);
      });
    });

    // Todo Controls Buttons 
    todosControlBtns.forEach(control => {
      control.addEventListener('click', () => {
        todosControlsBtnsContainer.style.display = 'none';
        switch (control.textContent) {
          case 'Remove':
            document.querySelector('#remove-todo-container').style.display = 'flex';
            completeTodoCheckboxes.forEach(checkbox => checkbox.style.display = 'none');
            removeTodoCheckboxes.forEach(checkbox => checkbox.style.display = 'inline');
            break;
          case 'Edit':
            document.querySelector('#edit-todo-container').style.display = 'flex';
            completeTodoCheckboxes.forEach(checkbox => checkbox.style.display = 'none');
            todoInfoContainers.forEach(todoInfoContainer => {
              todoInfoContainer.removeAttribute('class');
              todoInfoContainer.classList.add('edit-todo-info-container');

              [...todoInfoContainer.children].forEach((field, index) => {
                const label = document.createElement('label');
                let input = document.createElement('input');

                label.textContent = ((fieldNames[index])[0].toUpperCase() + fieldNames[index].slice(1));
                input.classList.add('edit-todo-field-input');

                if (fieldNames[index] === 'priority') {
                  input = document.createElement('select');
                  input.classList.add('edit-todo-field-input');

                  ['1', '2', '3', '4', '5'].forEach(n => {
                    const option = document.createElement('option');
                    option.value = n;
                    option.textContent = n;
                    input.appendChild(option);
                  });
                } else if (fieldNames[index] === 'dueDate') {
                  input.setAttribute('type', 'date');
                } else {
                  input.setAttribute('type', 'text');
                }

                input.value = field.textContent;

                label.appendChild(input);
                todoInfoContainer.replaceChild(label, field);
              });
            });
            // priority should be a drop down, 1-5
            break;
          case 'Add':
            document.querySelector('#add-todo-container').style.display = 'flex';
            const newTodoInfoContainer = document.createElement('div');
            newTodoInfoContainer.classList.add('add-todo-info-container');

            fieldNames.forEach(field => {
              if (field === 'completed') {
                null;
              } else {
                const label = document.createElement('label');
                let input = document.createElement('input');

                label.textContent = (field[0].toUpperCase() + field.slice(1));
                input.classList.add('add-todo-field-input');

                if (field === 'priority') {
                  input = document.createElement('select');
                  input.classList.add('add-todo-field-input');

                  ['1', '2', '3', '4', '5'].forEach(n => {
                    const option = document.createElement('option');
                    option.value = n;
                    option.textContent = n;
                    input.appendChild(option);
                  });
                } else if (field === 'dueDate') {
                  input.setAttribute('type', 'date');
                } else {                
                  input.setAttribute('type', 'text');
                }

                label.appendChild(input);
                newTodoInfoContainer.appendChild(label);
              } 
            }); 

            todosListContainer.appendChild(newTodoInfoContainer);
            // priority should be a drop down, 1-5
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
            const removeIndices = removeTodoCheckboxes.map(checkbox => {
              if (checkbox.checked) {
                return [...checkbox.parentElement.parentElement.children].indexOf(checkbox.parentElement);
              }
            }).filter(index => index || index === 0).reverse();

            removeIndices.forEach(index => selectedProject.deleteTodo(index));
          }
        }
        
        if (editTodoContainer.style.display === 'flex') {
          if (actionBtn.textContent === 'Edit') {
            const newValues = [...document.querySelectorAll('.edit-todo-info-container')].map(todoContainer => {
              return [...todoContainer.querySelectorAll('.edit-todo-field-input')].map(fieldInput => fieldInput.value);
            });

            if (!newValues.some(valuesArray => valuesArray.includes(''))) { 
              // console.log(!newValues.some(valuesArray => valuesArray.includes('')));
              selectedProject.todos.forEach((todo, todoIndex) => {
                fieldNames.forEach((field, fieldIndex) => {
                  todo[field] = newValues[todoIndex][fieldIndex];
                });
              });

              [...todoInfoContainers].forEach(todoInfoContainer => {
                todoInfoContainer.removeAttribute('class');
                todoInfoContainer.classList.add('todo-info-container');
              });
            } else {
              [...document.querySelector('.edit-todo-info-container').querySelectorAll('input')].forEach(fieldInput => {
                fieldInput.setCustomValidity('All fields required');
                fieldInput.reportValidity();
              });
            }
          }
        }
        
        if (addTodoContainer.style.display === 'flex') {
          if (actionBtn.textContent === 'Add') {
            const newValues = [...document.querySelectorAll('.add-todo-field-input')].map(fieldInput => fieldInput.value);

            if (!newValues.includes('')) {
              selectedProject.addTodo(new Todo(...newValues));
            } else {
              [...document.querySelector('.add-todo-info-container').querySelectorAll('input')].forEach(fieldInput => {
                fieldInput.setCustomValidity('All fields required');
                fieldInput.reportValidity();
              });
            }
          }
        }

        // prevent empty inputs from being submitted in Add/edit todo form
        if ([...document.querySelectorAll('.edit-todo-field-input')].map(fieldInput => fieldInput.value).includes('')) return;
        if ([...document.querySelectorAll('.add-todo-field-input')].map(fieldInput => fieldInput.value).includes('')) return;

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
      });
    });
  }

  return { todosHandler, displayTodos, todosControlsContainers, clearTodos, clearControlsContainer, todosEventHandlers }
})();

export default todosContainer;
