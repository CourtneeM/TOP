import '../../styles/todo_container/style.css';

const todoContainer = (() =>{
  const render = (() => {
    const todoContainer = (todo) => {
      const todoContainer = document.createElement('div');
      const editTodoBtn = todoControls.generateEditTodoBtn();
      
      todoContainer.classList.add('todo-container');

      todoContainer.appendChild(editTodoBtn);

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

      const cancelEditTodoBtn = () => {
        const cancelEditTodoBtn = document.createElement('i');
        cancelEditTodoBtn.classList.add('far', 'fa-window-close', 'cancel-edit-todo-btn');

        return cancelEditTodoBtn;
      }

      return { generateEditTodoBtn, generateDeleteTodoBtn, generateConfirmEditTodoBtn, cancelEditTodoBtn }
    })();

    const editTodo = (() => {
      const editTodoForm = (selectedTodo, todoPs) => {
        const confirmEditTodoBtn = todoControls.generateConfirmEditTodoBtn();
        const cancelEditTodoBtn = todoControls.cancelEditTodoBtn();
        const oldTodoValues = [...todoPs].map(el => el.textContent);

        selectedTodo.removeChild(selectedTodo.querySelector('.edit-todo-btn'));
        selectedTodo.insertBefore(cancelEditTodoBtn, selectedTodo.firstChild);
        selectedTodo.insertBefore(confirmEditTodoBtn, selectedTodo.firstChild);

        [...selectedTodo.querySelectorAll('.item-container')].forEach((itemContainer, i) => {
          const todoHeader = [...itemContainer.children][0].textContent;
          let input = document.createElement('input');

          console.log(todoHeader);

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
        const editTodoBtn = todoControls.generateEditTodoBtn();

        selectedTodoContainer.removeChild(selectedTodoContainer.querySelector('.confirm-edit-todo-btn'));
        selectedTodoContainer.removeChild(selectedTodoContainer.querySelector('.cancel-edit-todo-btn'));
        selectedTodoContainer.insertBefore(editTodoBtn, selectedTodoContainer.firstChild);

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
