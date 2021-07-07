import '../../styles/todo_container/style.css';

const todoContainer = (() =>{
  const render = todo => {
    const todoContainer = document.createElement('div');
    todoContainer.classList.add('todo-container');

    for (let item in todo) {
      const itemDiv = document.createElement('div');
      const itemHeader = document.createElement('p');
      const itemContent = document.createElement('p');

      itemDiv.classList.add('item-container');
      itemHeader.textContent = item;

      if (item === 'completed') {
        itemContent.textContent = todo[item] ? 'Yes' : 'No';
      } else {
        itemContent.textContent = todo[item];
      }
      
      [itemHeader, itemContent].forEach(item => itemDiv.appendChild(item));
      todoContainer.appendChild(itemDiv);
    }

    return todoContainer;
  }

  return { render }
})();

export default todoContainer;
