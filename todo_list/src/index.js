import TodoList from './modules/todos/todo_list';
import Project from './modules/todos/projects';
import Todo from './modules/todos/todo';

let todos = new TodoList();
let project1 = new Project('project 1');
let todo1 = new Todo('todo 1', 'todo 1 description', 'tomorrow', '3', 'notes1');
