import TodoList from './modules/todos/todo_list';
import Project from './modules/todos/projects';
import Todo from './modules/todos/todo';
import mainContainer from './modules/display_controller/main_container';



// todos.addProject(new Project('project 2'));
// todos.list['project 2'].addTodo(new Todo('todo 1', 'todo 1 description', 'tomorrow', '4', 'notes'));

// ==================================================== //

// DOM Stuff
// console.log(mainContainer);

function initialLoad() {
  const todos = new TodoList();
  todos.addProject(new Project('Default Project', true));
  todos.addProject(new Project('Project 1'));

  mainContainer(todos);
}

initialLoad();
