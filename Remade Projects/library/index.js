class Book {
  constructor(author, title, pages, readStatus) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.readStatus = readStatus;
  }

  editBook(author, title, pages, readStatus) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.readStatus = readStatus;
  }

  toggleReadStatus() {
    this.readStatus = !this.readStatus;
  }
}

const libraryController = (() => {
  const myLibrary = [];

  const addBook = book => {
    myLibrary.push(book);
  }
  
  const editBook = (index, author, title, pages, readStatus) => {
    myLibrary[index].editBook(author, title, pages, readStatus);
  }

  const removeBook = index => {
    myLibrary.splice(index, 1);
  }

  const toggleBookReadStatus = index => {
    myLibrary[index].toggleReadStatus();
  }

  const changeBookPosition = (currentIndex, newIndex) => {
    let selectedBook = myLibrary.splice(currentIndex, 1)[0];
    myLibrary.splice(newIndex, 0, selectedBook);
  }

  return { myLibrary, addBook, editBook, removeBook, toggleBookReadStatus, changeBookPosition }
})();

const displayController = (() => {
  const body = document.querySelector('body');
  const bookItems = ['Author', 'Title', 'Pages', 'Read Status'];
  
  const generateAddBookContainer = () => {
    const header = document.createElement('header');
    const form = document.createElement('form');
    const addBookBtn = document.createElement('button');

    addBookBtn.id = 'add-book-btn';

    bookItems.forEach(item => {
      const label = document.createElement('label');
      const input = document.createElement('input');

      if (item === 'Pages') input.type = 'number';
      if (item === 'Read Status') input.type = 'checkbox';

      label.textContent = item;
      label.appendChild(input);
      form.appendChild(label);
    });

    addBookBtn.textContent = 'Add Book';
    form.appendChild(addBookBtn);
    header.appendChild(form);
    body.appendChild(header);
  }

  const generateBookshelf = () => {
    const main = document.createElement('main');
    const bookshelfContainer = document.createElement('div');
    const bookshelfHeader = document.createElement('header');
    const bookshelfBody = document.createElement('div');

    bookshelfContainer.id = 'bookshelf-container';
    bookshelfHeader.id = 'bookshelf-header';
    bookshelfBody.id = 'bookshelf-body';

    ['', ...bookItems, ''].forEach(item => {
      const h2 = document.createElement('h2');
      h2.textContent = item;
      h2.classList.add('bookshelf-header-item');

      bookshelfHeader.appendChild(h2);
    });

    bookshelfContainer.appendChild(bookshelfHeader);
    bookshelfContainer.appendChild(bookshelfBody);
    main.appendChild(bookshelfContainer);
    body.appendChild(main);
  }

  const initialRender = (() => {
    generateAddBookContainer();
    generateBookshelf();
  })();

  const generateEditBookBtn = () => {
    const editBookBtn = document.createElement('i');
    editBookBtn.classList.add('far', 'fa-edit', 'edit-book-btn');
    eventHandlers.editBook(editBookBtn);

    return editBookBtn;
  }

  const generateRemoveBookBtn = () => {
    const removeBookBtn = document.createElement('i');
    removeBookBtn.classList.add('fas', 'fa-trash', 'remove-book-btn');
    eventHandlers.removeBook(removeBookBtn);

    return removeBookBtn;
  }

  const addBookToBookshelf = book => {
    const bookshelfBody = document.querySelector('#bookshelf-body');
    const bookContainer = document.createElement('div');
    const editBookBtn = generateEditBookBtn();
    const removeBookBtn = generateRemoveBookBtn();

    bookContainer.classList.add('book-container'); 
    bookContainer.appendChild(editBookBtn);

    for (let item in book) {
      const p = document.createElement('p');
      console.log(item);
      if (item === 'readStatus') {
        p.classList.add('read-status');
        eventHandlers.toggleReadStatus(p, bookContainer);
      }

      p.textContent = book[item];
      bookContainer.appendChild(p);
    }

    bookContainer.appendChild(removeBookBtn);
    bookshelfBody.appendChild(bookContainer);
  }

  const editBook = index => {
    const bookshelfBody = document.querySelector('#bookshelf-body');
    const bookContainer = [...bookshelfBody.children][index];
    const editBookBtn = bookContainer.querySelector('.edit-book-btn');
    const editFields = [...bookContainer.querySelectorAll('input')];
    const newValues = editFields.map(field => {
      if (field.type === 'checkbox') return field.checked;
      return field.value;
    });
    
    if (!newValues.slice(0, 3).every(value => value)) return;
    editFields.forEach((field, index) => field.parentElement.textContent = newValues[index]);

    editBookBtn.classList.remove('fa-check-square');
    editBookBtn.classList.add('fa-edit');

    libraryController.editBook(index, ...newValues)
  }

  const editBookFields = index => {
    const bookshelfBody = document.querySelector('#bookshelf-body');
    const bookContainer = [...bookshelfBody.children][index];
    const editBookBtn = bookContainer.querySelector('.edit-book-btn');
    const fields = [...bookContainer.children].slice(1, 5);
    fields.forEach((field, index) => {
      const input = document.createElement('input');

      field.textContent = '';
      index === 3 ? input.type = 'checkbox' : input.type = 'text';
      field.appendChild(input);
    });

    editBookBtn.classList.remove('fa-edit');
    editBookBtn.classList.add('fa-check-square');
  }

  const removeBookFromBookshelf = index => {
    const bookContainer = [...document.querySelector('#bookshelf-body').children][index];
    bookContainer.parentElement.removeChild(bookContainer);
  }

  const toggleBookReadStatus = (bookContainer) => {
    let readStatus = bookContainer.querySelector('.read-status').textContent;
    bookContainer.querySelector('.read-status').textContent = readStatus === 'true' ? 'false' : 'true';
  }

  return { addBookToBookshelf, editBook, editBookFields, removeBookFromBookshelf, toggleBookReadStatus }
})();

const eventHandlers = (() => {
  const bookshelfBody = document.querySelector('#bookshelf-body')

  const preventEmptyInputs = inputs => !inputs.slice(0, -1).every(input => input.value !== '');
  
  const extractInputs = inputs => {
    let [author, title, pages, readStatus] = inputs.map(input => input.getAttribute('type') === 'checkbox' ? input.checked : input.value);
    inputs.forEach(input => input.getAttribute('type') === 'checkbox' ? input.checked = false : input.value = '');
    return [author, title, pages, readStatus];
  }

  const addBook = (() => {
    document.querySelector('#add-book-btn').addEventListener('click', (e) => {
      e.preventDefault();

      const inputs = [...document.querySelector('header').querySelectorAll('input')];
      if (preventEmptyInputs(inputs)) return;

      let newBook = new Book(...extractInputs(inputs));
      libraryController.addBook(newBook);
      displayController.addBookToBookshelf(newBook);
    });
  })();

  const editBook = editBookBtn => {
    editBookBtn.addEventListener('click', () => {
      const index = [...editBookBtn.parentElement.parentElement.children].indexOf(editBookBtn.parentElement);
      if (editBookBtn.classList.contains('fa-edit')) {
        displayController.editBookFields(index);
      } else {
        displayController.editBook(index);
      }
    });
  }

  const removeBook = removeBookBtn => {
    removeBookBtn.addEventListener('click', () => {
      const index = [...removeBookBtn.parentElement.parentElement.children].indexOf(removeBookBtn.parentElement);
      libraryController.removeBook(index);
      displayController.removeBookFromBookshelf(index);
    });
  }

  const toggleReadStatus = (readStatusP, bookContainer) => {
    readStatusP.addEventListener('click', () => {
      let bookIndex = [...bookshelfBody.children].indexOf(bookContainer);
      libraryController.toggleBookReadStatus(bookIndex);
      displayController.toggleBookReadStatus(bookContainer);
    });
  }

  return { editBook, removeBook, toggleReadStatus }
})();
