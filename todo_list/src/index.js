import TodoList from './modules/todos/todo_list';
import Project from './modules/todos/projects';
import Todo from './modules/todos/todo';
import mainContainer from './modules/display_controller/main_container';

function initialLoad() {
  const todos = new TodoList();
  todos.addProject(new Project('Default Project'));
  todos.addProject(new Project('Project 1'));
  todos.list[0].addTodo(new Todo('Clean room', 'Tidy up around room', '2021-06-20', '3', 'Clean under bed, dust shelves, wipe TV'));
  todos.list[0].addTodo(new Todo('Do homework', 'Finish all homework', '2021-05-22', '5', 'history, math, science, business'));
  todos.list[0].addTodo(new Todo('Pick up dog food', 'Get food for Liza', '2021-05-23', '3', 'Petfoods Depot has a sale on dog food'));
  todos.list[1].addTodo(new Todo('2', '2 desc', '2022-01-01', '1', 'notes22'));

  mainContainer(todos, Project, Todo);
}

initialLoad();
