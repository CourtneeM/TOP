import Todo from './modules/todo_controller/todo';
import TodoList from './modules/todo_controller/todo_list';
import Projects from './modules/todo_controller/projects';
import projectsContainer from './modules/display_controller/projects';
// import todoListContainer from './modules/display_controller/todo_list';
// import todoContainer from './modules/display_controller/todo';

// Test //
const defaultList = new TodoList([new Todo('defaultTodo1', 'default todo 1', 'now', 1, 'notes', false), new Todo('defaultTodo2', 'default todo 2', 'later', 2, 'notes notes', true)]);
const projects = new Projects();

projects.addList('Default List', defaultList);
// console.log(projects);
const body = document.querySelector('body');
body.appendChild(projectsContainer.initialRender(projects));

