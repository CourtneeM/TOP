import './styles/style.css';

import Todo from './modules/todo_controller/todo';
import TodoList from './modules/todo_controller/todo_list';
import Projects from './modules/todo_controller/projects';
import projectsContainer from './modules/display_controller/projects';
import todoListContainer from './modules/display_controller/todo_list';
import todoContainer from './modules/display_controller/todo';

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
  projectsContainer.initialRender(projects, todoListContainer);
  todoListContainer.initialRender('Default List', projects['Default List']);
})();

const eventHandlers = (() => {
  const projectsListener = (() => {
    const projectPListener = (projectP) => {
      projectP.addEventListener('click', () => {
        todoListContainer.rerenderTodoListContainer(projectP.textContent, projects[projectP.textContent]);
        console.log(projects);
      });
    }
  
    const editProjectListeners = (() => {
      const editProject = editBtn => {  
        editBtn.addEventListener('click', () => {
          const selectedProject = editBtn.parentElement
          const selectedProjectName = selectedProject.querySelector('.project-name').textContent;
  
          projectsContainer.editProject.renderEdit(selectedProject);
          confirmEditProject(projects, selectedProject, selectedProjectName);
          cancelEditProject(projects, selectedProject, selectedProjectName);
          deleteProjectListener.deleteProject(selectedProjectName, selectedProject.querySelector('.delete-project-btn'));
        });
      }
  
      const confirmEditProject = (projects, selectedProject, oldProjectName) => {
        selectedProject.querySelector('.confirm-edit-project-btn').addEventListener('click', () => {
          projectsContainer.editProject.renderConfirmCancelEdit(selectedProject);
  
          const newProjectNameContainer = selectedProject.querySelector('.project-name');
          const newProjectName = newProjectNameContainer.textContent;
          projects.editListName(oldProjectName, newProjectName);
          todoListContainer.rerenderTodoListContainer(newProjectName, projects[newProjectName]);
          projectPListener(newProjectNameContainer);
          editProject(selectedProject.querySelector('.edit-project-btn'));
        });
      }
      
      const cancelEditProject = (projects, selectedProject, selectedProjectName) => {
        selectedProject.querySelector('.cancel-edit-project-btn').addEventListener('click', () => {
          projectsContainer.editProject.renderConfirmCancelEdit(selectedProject, selectedProjectName);
          projectPListener(selectedProject.querySelector('.project-name'));
          editProject(selectedProject.querySelector('.edit-project-btn'));
        });
      }

      return { editProject }
    })();

    const deleteProjectListener = (() => {
      const deleteProject = (selectedProjectName, deleteBtn) => {
        deleteBtn.addEventListener('click', () => {
          const selectedProjectContainer = deleteBtn.parentElement;

          projects.removeList(selectedProjectName);
          projectsContainer.deleteProject(selectedProjectContainer);

          if (document.querySelector('#current-project-name').textContent === selectedProjectName) {
            const firstProject = Object.keys(projects)[0];
            todoListContainer.rerenderTodoListContainer(firstProject, projects[firstProject]);
          }
        });

      }
      // if the selected project is the currently displayed, display the first project in the projects list
      return { deleteProject }
    })();

    const newProjectListeners = (() => {
      const newProjectListener = (newProjectBtn) => {
        newProjectBtn.addEventListener('click', () => {
          projectsContainer.newProject.renderNewProject();
          confirmNewProject(projects);
          cancelNewProject();
        });
      }
  
      const confirmNewProject = projects => {
        document.querySelector('#confirm-new-project-btn').addEventListener('click', () => {
          const newProjectName = document.querySelector('#new-project-container').querySelector('input').value;
          if (!newProjectName) return;

          projectsContainer.newProject.renderConfirmCancelNewProject(newProjectName);
          projects.addList(newProjectName)

          const projectContainers = [...document.querySelectorAll('.project-name')];
          const newProjectContainer = projectContainers[projectContainers.length - 1].parentElement;
          projectPListener(newProjectContainer.querySelector('.project-name'));
          editProjectListeners.editProject(newProjectContainer.querySelector('.edit-project-btn'));
          newProjectListener(document.querySelector('#new-project-btn'));
        });
      }
      
      const cancelNewProject = () => {
        document.querySelector('#cancel-new-project-btn').addEventListener('click', () => {
          projectsContainer.newProject.renderConfirmCancelNewProject()
          newProjectListener(document.querySelector('#new-project-btn'));
        });
      }

      return { newProjectListener }
    })();

    const initialProjectsListener = () => {
      const projectsListContainer = document.querySelector('#projects-list-container');
      const newProjectBtn = document.querySelector('#new-project-btn');
  
      [...projectsListContainer.querySelectorAll('.project-name')].forEach(projectP => {
        projectPListener(projectP);
      });

      [...document.querySelectorAll('.edit-project-btn')].forEach(editBtn => {
        editProjectListeners.editProject(editBtn);
      });

      newProjectListeners.newProjectListener(newProjectBtn);
    };

    return { initialProjectsListener }
  })();

  const todoListListener = (() => {

    const newTodoBtnListener = (() => {
      const newTodoForm = () => {
        document.querySelector('#new-todo-form-btn').addEventListener('click', () => {
          todoListContainer.newTodo.renderNewTodoForm(projects);
          confirmNewTodo();
          cancelNewTodo();
        });
      }

      const confirmNewTodo = () => {
        document.querySelector('#add-todo-btn').addEventListener('click', () => {
          const inputValues = [...document.querySelectorAll('.new-todo-form-input')].map(input => {
            return input.type === 'checkbox' ? input.checked : input.value
          });

          if ([inputValues[0], inputValues[1], inputValues[2]].some(value => !value)) return;

          const newTodo = new Todo(...inputValues);
          const currentProject = projects[document.querySelector('#current-project-name').textContent];

          currentProject.list.push(newTodo);
          todoListContainer.addTodo(newTodo);
          cancelConfirmNewTodo();
        });
      }

      const cancelNewTodo = () => {
        document.querySelector('#cancel-new-todo-btn').addEventListener('click', () => {
          cancelConfirmNewTodo();
        });
      }

      const cancelConfirmNewTodo = () => {
        todoListContainer.newTodo.renderConfirmCancelNewTodo();
        todoListContainer.newTodo.renderNewTodoButton();
        newTodoForm();
      }

      return { newTodoForm }
    })();

    const initialTodoListListeners = () => {
      newTodoBtnListener.newTodoForm();
    }

    return { initialTodoListListeners }
  })();

  const todosListener = (() => {
    const editTodo = editBtn => {
      editBtn.addEventListener('click', () => {
        const selectedTodo = editBtn.parentElement;
        const todoPs = selectedTodo.querySelectorAll('.todo-value');

        todoContainer.render.editTodo.editTodoForm(selectedTodo, todoPs);

        confirmEditTodo(selectedTodo);
        cancelEditTodo(selectedTodo, todoPs);
      });

      const confirmEditTodo = selectedTodo => {
        selectedTodo.querySelector('.confirm-edit-todo-btn').addEventListener('click', () => {
          todoContainer.render.editTodo.confirmEditTodo(selectedTodo);
          editTodo(selectedTodo.querySelector('edit-todo-btn'));
        });
      }

      const cancelEditTodo = (selectedTodo, todoPs) => {
        selectedTodo.querySelector('.cancel-edit-todo-btn').addEventListener('click', () => {
         todoContainer.render.editTodo.cancelEditTodo(selectedTodo, todoPs);
         editTodo(selectedTodo.querySelector('.edit-todo-btn'));
        });
      }
    }

    const initialTodoListeners = () => {
      document.querySelectorAll('.edit-todo-btn').forEach(editBtn => {
        editTodo(editBtn);
      });
    }

    return { initialTodoListeners }
  })();
  
  const initialListeners = (() => {
    projectsListener.initialProjectsListener();
    todoListListener.initialTodoListListeners();
    todosListener.initialTodoListeners();
  })();
})();
