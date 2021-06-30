import './styles/style.css';

import Todo from './modules/todo_controller/todo';
import TodoList from './modules/todo_controller/todo_list';
import Projects from './modules/todo_controller/projects';
import projectsContainer from './modules/display_controller/projects';
import currentProjectContainer from './modules/display_controller/todo_list';

// Test //
const defaultList = new TodoList([new Todo('defaultTodo1', 'default todo 1', 'now', 1, 'notes', false),
                                  new Todo('defaultTodo2', 'default todo2', 'later', 2, 'notes', true)]);

const todoList1 = new TodoList([new Todo('todo1', 'todo 1', 'later', 1, 'notesy', true),
                                new Todo('todo11', 'todo 11', 'later again', 11, 'notesy notesy', true),
                                new Todo('todo111', 'todo 111', 'later', 111, 'notesy', false)]);

const projects = new Projects();

projects.addList('Default List', defaultList);
projects.addList('Todo List 1', todoList1);
// console.log(projects);

const initialRender = (() => {
  projectsContainer.initialRender(projects);
  currentProjectContainer.initialRender('Default List', projects['Default List']);
})();

const projectsListContainer = document.querySelector('#projects-list-container');
[...projectsListContainer.children].forEach(projectP => {
  projectP.addEventListener('click', () => {
    currentProjectContainer.rerenderTodoListContainer(projectP.textContent, projects[projectP.textContent]);
  });
});

document.querySelector('#new-todo-form-btn').addEventListener('click', () => {
  currentProjectContainer.renderNewTodoForm(projects);
  document.querySelector('#add-todo-btn').addEventListener('click', () => {
    
  });
});
