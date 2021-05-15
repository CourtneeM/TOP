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
  todos.list[0].addTodo(new Todo('Clean room', 'Tidy up around room', 'tomorrow', '3', 'Clean under bed, dust shelves, wipe TV'));
  todos.list[0].addTodo(new Todo('Do homework', 'Finish all homework', 'today', '5', 'history, math, science, business'));
  todos.list[0].addTodo(new Todo('Pick up dog food', 'Get food for Liza', 'today', '3', 'Petfoods Depot has a sale on dog food'));
  todos.list[1].addTodo(new Todo('2', '2 desc', 'never', '1', 'notes22'));
  mainContainer(todos);
}

initialLoad();
