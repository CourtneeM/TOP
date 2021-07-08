import '../../styles/todo_list_container/style.css';
import todoContainer from './todo';

const todoListContainer = (() => {
  const currentProjectContainer = document.createElement('section');
  currentProjectContainer.id = 'current-project-container';
  
  const initialRender = (projectName, projectList) => {
    renderTodoListContainer(projectName, projectList);
    newTodo.renderNewTodoButton();

    document.querySelector('body').appendChild(currentProjectContainer);
  }

  const renderTodoListContainer = (projectName, projectList) => {
    if (!projectList) return;

    const todoListContainer = document.createElement('div');
    const todoListH2 = document.createElement('h2');

    todoListContainer.id = 'todo-list-container';
    todoListH2.id = 'current-project-name';
    todoListH2.textContent = projectName;

    todoListContainer.appendChild(todoListH2);

    for (let todo of projectList.list) {
      todoListContainer.appendChild(todoContainer.render.todoContainer(todo));
    }

    currentProjectContainer.appendChild(todoListContainer);
  }

  const clearTodoList = () => {
    const currentProjectContainer = document.querySelector('#current-project-container');
    currentProjectContainer.removeChild(document.querySelector('#todo-list-container'));
  }
  
  const rerenderTodoListContainer = (projectName, projectList) => {
    clearTodoList();
    renderTodoListContainer(projectName, projectList);
  }

  const addTodo = (newTodo) => {
    const newTodoElement = todoContainer.render.todoContainer(newTodo);
    document.querySelector('#todo-list-container').appendChild(newTodoElement);
  }

  const removeTodo = index => {

  }

  const newTodo = (() => {
    const renderNewTodoButton = () => {
      const newTodoFormBtn = document.createElement('i');

      newTodoFormBtn.id = 'new-todo-form-btn';
      newTodoFormBtn.classList.add('fas', 'fa-plus-circle');

      currentProjectContainer.appendChild(newTodoFormBtn);
    }

    const renderNewTodoForm = () => {
      const newTodoForm = document.createElement('div');
      const todoHeaders = ['Title', 'Description', 'Due Date', 'Priority', 'Notes', 'Completed'];
      const addTodoBtn = document.createElement('i');
      const cancelNewTodoBtn = document.createElement('i');

      newTodoForm.id = 'new-todo-form';
      addTodoBtn.id = 'add-todo-btn';
      cancelNewTodoBtn.id = 'cancel-new-todo-btn';
      addTodoBtn.classList.add('fas', 'fa-check-circle');
      cancelNewTodoBtn.classList.add('fas', 'fa-times-circle');
      
      todoHeaders.forEach(todoHeader => {
        const itemDiv = document.createElement('div');
        const itemHeader = document.createElement('p');
        let itemInput = document.createElement('input');

        if (todoHeader === 'Due Date') itemInput.setAttribute('type', 'date');

        if (todoHeader === 'Priority') {
          itemInput = document.createElement('select');
          const options = [1, 2, 3, 4, 5];
          options.forEach(option => {
            const optionEl = document.createElement('option');
            optionEl.value = option;
            optionEl.textContent = option;
            itemInput.appendChild(optionEl);
          });
        }

        if (todoHeader === 'Completed') itemInput.setAttribute('type', 'checkbox');

        itemHeader.textContent = todoHeader;
        itemInput.classList.add('new-todo-form-input');

        [itemHeader, itemInput].forEach(el => itemDiv.appendChild(el));
        newTodoForm.appendChild(itemDiv);
      });

      currentProjectContainer.removeChild(document.querySelector('#new-todo-form-btn'));

      newTodoForm.appendChild(addTodoBtn);
      newTodoForm.appendChild(cancelNewTodoBtn);
      currentProjectContainer.appendChild(newTodoForm);
    }

    const renderConfirmCancelNewTodo = () => {
      currentProjectContainer.removeChild(document.querySelector('#new-todo-form'));
    }

    return { renderNewTodoButton, renderNewTodoForm, renderConfirmCancelNewTodo }
  })();

  return { initialRender, rerenderTodoListContainer, addTodo, removeTodo, newTodo }
})();

export default todoListContainer;
