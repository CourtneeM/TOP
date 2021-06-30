import '../../styles/todo_list_container/style.css';
import todoContainer from './todo';

const currentProjectContainer = (() => {
  const currentProjectContainer = document.createElement('section');
  currentProjectContainer.id = 'current-project-container';
  
  const initialRender = (projectName, projectList) => {
    renderTodoListContainer(projectName, projectList);
    renderNewTodoButton();

    document.querySelector('body').appendChild(currentProjectContainer);
  }

  const renderTodoListContainer = (projectName, projectList) => {
    const todoListContainer = document.createElement('div');
    const todoListH2 = document.createElement('h2');

    todoListContainer.id = 'todo-list-container';
    todoListH2.id = 'current-project-name';
    todoListH2.textContent = projectName;

    todoListContainer.appendChild(todoListH2);

    for (let todo of projectList.list) {
      todoListContainer.appendChild(todoContainer.render(todo));
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
    const newTodoElement = todoContainer.render(newTodo);
    document.querySelector('#todo-list-container').appendChild(newTodoElement);
  }

  const removeTodo = index => {

  }

  const renderNewTodoButton = () => {
    const newTodoFormBtn = document.createElement('button');

    newTodoFormBtn.id = 'new-todo-form-btn';
    newTodoFormBtn.textContent = '+';

    currentProjectContainer.appendChild(newTodoFormBtn);
  }

  const renderNewTodoForm = (projects) => {
    const newTodoForm = document.createElement('div');
    const currentProjectName = document.querySelector('#current-project-name').textContent;
    const todoHeaders = Object.keys(projects[currentProjectName].list[0]);
    const addTodoBtn = document.createElement('button');

    newTodoForm.id = 'new-todo-form';
    addTodoBtn.id = 'add-todo-btn';
    addTodoBtn.textContent = 'Add';

    todoHeaders.forEach(todoHeader => {
      const itemDiv = document.createElement('div');
      const itemHeader = document.createElement('p');
      const itemInput = document.createElement('input');

      itemHeader.textContent = todoHeader;

      [itemHeader, itemInput].forEach(el => itemDiv.appendChild(el));
      newTodoForm.appendChild(itemDiv);
    });
    
    newTodoForm.appendChild(addTodoBtn);
    currentProjectContainer.appendChild(newTodoForm);
  }

  return { initialRender, rerenderTodoListContainer, addTodo, removeTodo, renderNewTodoForm }
})();

export default currentProjectContainer;
