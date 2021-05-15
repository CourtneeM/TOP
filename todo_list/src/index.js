import TodoList from './modules/todos/todo_list';
import Project from './modules/todos/projects';
import Todo from './modules/todos/todo';


let todos = new TodoList();
todos.addProject(new Project('default project'));
todos.addProject(new Project('project 1'));
