import '../../styles/todo_container/style.css';

const todoContainer = (() =>{
  const render = (() => {
    const todoContainer = (todo) => {
      const todoContainer = document.createElement('div');
      const editTodoBtn = document.createElement('i');
      
      todoContainer.classList.add('todo-container');
      editTodoBtn.classList.add('far', 'fa-edit', 'edit-todo-btn');

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

    const editTodo = (() => {
      const editTodoForm = (selectedTodo, todoPs) => {
        const confirmEditTodoBtn = document.createElement('i');
        const cancelEditTodoBtn = document.createElement('i');
        const oldTodoValues = [...todoPs].map(el => el.textContent);

        confirmEditTodoBtn.classList.add('far', 'fa-check-square', 'confirm-edit-todo-btn');
        cancelEditTodoBtn.classList.add('far', 'fa-window-close', 'cancel-edit-todo-btn');

        selectedTodo.removeChild(selectedTodo.querySelector('.edit-todo-btn'));
        selectedTodo.insertBefore(cancelEditTodoBtn, selectedTodo.firstChild);
        selectedTodo.insertBefore(confirmEditTodoBtn, selectedTodo.firstChild);

        [...selectedTodo.querySelectorAll('.item-container')].forEach((itemContainer, i) => {
          const input = document.createElement('input');
          
          input.classList.add('edit-todo-input');
          input.placeholder = oldTodoValues[i];
          
          itemContainer.removeChild(itemContainer.querySelector('.todo-value'));
          itemContainer.appendChild(input);
        });
      }

      const confirmEditTodo = selectedTodo => {

      }

      const cancelEditTodo = (selectedTodoContainer, todoPs) => {
        const editTodoBtn = document.createElement('i');
        editTodoBtn.classList.add('far', 'fa-edit', 'edit-todo-btn');

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
