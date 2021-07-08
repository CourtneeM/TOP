import '../../styles/todo_container/style.css';

const todoContainer = (() =>{
  const render = (() => {
    const todoContainer = (todo) => {
      const todoContainer = document.createElement('div');
      const editDeleteTodoBtnsContainer = todoControls.generateEditDeleteBtnsContainer();
      
      todoContainer.classList.add('todo-container');

      todoContainer.appendChild(editDeleteTodoBtnsContainer);

      for (let item in todo) {
        const itemDiv = document.createElement('div');
        const itemHeader = document.createElement('p');
        const itemContent = document.createElement('p');

        itemDiv.classList.add('item-container');
        itemContent.classList.add('todo-value');
        itemHeader.textContent = item;

        if (item === 'completed') {
          itemContent.textContent = todo[item] ? 'Yes' : 'No';
        } else {
          itemContent.textContent = todo[item];
        }
        
        [itemHeader, itemContent].forEach(item => itemDiv.appendChild(item));
        todoContainer.appendChild(itemDiv);
      }

      return todoContainer;
    }

    const todoControls = (() => {
      const generateEditTodoBtn = () => {
        const editTodoBtn = document.createElement('i');
        editTodoBtn.classList.add('far', 'fa-edit', 'edit-todo-btn');

        return editTodoBtn;
      }

      const generateDeleteTodoBtn = () => {
        const deleteTodoBtn = document.createElement('i');
        deleteTodoBtn.classList.add('far', 'fa-trash-alt');

        return deleteTodoBtn;
      }

      const generateConfirmEditTodoBtn = () => {
        const confirmEditTodoBtn = document.createElement('i');
        confirmEditTodoBtn.classList.add('far', 'fa-check-square', 'confirm-edit-todo-btn');

        return confirmEditTodoBtn;
      }

      const generateCancelEditTodoBtn = () => {
        const cancelEditTodoBtn = document.createElement('i');
        cancelEditTodoBtn.classList.add('far', 'fa-window-close', 'cancel-edit-todo-btn');

        return cancelEditTodoBtn;
      }

      const generateEditDeleteBtnsContainer = () => {
        const btnsContainer = document.createElement('div');
        btnsContainer.id = 'edit-delete-todo-controls-container';
        
        [generateEditTodoBtn(), generateDeleteTodoBtn()].forEach(el => btnsContainer.appendChild(el));
        return btnsContainer;
      }
      
      const generateConfirmCancelBtnsContainer = () => {
        const btnsContainer = document.createElement('div');
        btnsContainer.id = 'confirm-cancel-todo-controls-container';
        
        [generateConfirmEditTodoBtn(), generateCancelEditTodoBtn()].forEach(el => btnsContainer.appendChild(el));
        return btnsContainer;
       }

      return { generateEditDeleteBtnsContainer, generateConfirmCancelBtnsContainer }
    })();

    const editTodo = (() => {
      const editTodoForm = (selectedTodo, todoPs) => {
        const confirmCancelTodoBtnsContainer = todoControls.generateConfirmCancelBtnsContainer();
        const oldTodoValues = [...todoPs].map(el => el.textContent);

        selectedTodo.removeChild(selectedTodo.querySelector('#edit-delete-todo-controls-container'));
        selectedTodo.insertBefore(confirmCancelTodoBtnsContainer, selectedTodo.firstChild);

        [...selectedTodo.querySelectorAll('.item-container')].forEach((itemContainer, i) => {
          const todoHeader = [...itemContainer.children][0].textContent;
          let input = document.createElement('input');

          if (todoHeader === 'due date') input.setAttribute('type', 'date');

          if (todoHeader === 'priority') {
            input = document.createElement('select');
            const options = [1, 2, 3, 4, 5];
            options.forEach(option => {
              const optionEl = document.createElement('option');
              optionEl.value = option;
              optionEl.textContent = option;
              input.appendChild(optionEl);
            });
          }

          if (todoHeader === 'completed') {
            input.setAttribute('type', 'checkbox');
            todoPs[i].textContent === 'Yes' ? input.checked = true : input.checked = false;
          }
          
          input.classList.add('edit-todo-input');
          input.value = oldTodoValues[i];
          
          itemContainer.removeChild(itemContainer.querySelector('.todo-value'));
          itemContainer.appendChild(input);
        });
      }

      const confirmEditTodo = selectedTodo => {
        // start here
      }

      const cancelEditTodo = (selectedTodoContainer, todoPs) => {
        const editDeleteTodoBtnsContainer = todoControls.generateEditDeleteBtnsContainer();

        selectedTodoContainer.removeChild(selectedTodoContainer.querySelector('#confirm-cancel-todo-controls-container'));
        selectedTodoContainer.insertBefore(editDeleteTodoBtnsContainer, selectedTodoContainer.firstChild);

        [...selectedTodoContainer.querySelectorAll('.item-container')].forEach((itemContainer, i) => {
          itemContainer.removeChild(itemContainer.querySelector('.edit-todo-input'));
          itemContainer.appendChild(todoPs[i]);
        });
      }

       return { editTodoForm, confirmEditTodo, cancelEditTodo }
    })();

    return { todoContainer, editTodo }
  })();

  return { render }
})();

export default todoContainer;
