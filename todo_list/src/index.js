import TodoList from './modules/todos/todo_list';
import Project from './modules/todos/projects';
import Todo from './modules/todos/todo';
import mainContainer from './modules/display_controller/main_container';

function initialLoad() {
  const todos = new TodoList();
  todos.addProject(new Project('Test Project 1'));
  todos.addProject(new Project('Test Project 2'));
  todos.list[0].addTodo(new Todo('Test Todo 1', 'Tidy up around room', '2021-06-20', 3, 'Clean under bed, dust shelves, wipe TV'));
  todos.list[0].addTodo(new Todo('Test Todo 2', 'Finish all homework', '2021-05-22', 5, 'history, math, science, business'));
  todos.list[0].addTodo(new Todo('Test Todo 3', 'Get food for Liza', '2021-05-23', 3, 'Petfoods Depot has a sale on dog food'));
  todos.list[1].addTodo(new Todo('Test Todo 1', 'Test Project 2, Test Todo 1', '2021-06-05', 1, 'Notes for test todo 1'));

  mainContainer(todos, Project, Todo);
}

initialLoad();
