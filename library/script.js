const displayAddBookFormBtn = document.querySelector('#btn-display-add-book-form');
const addBookBtn = document.querySelector('#btn-add-book');
const bookshelfContainer = document.querySelector('#book-shelf-container');
let bookshelfTable = document.createElement('table');

let myLibrary = [];

function Book(title, author, pages, readStatus) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readStatus = readStatus;
}

function addBookToLibrary() {
  let userInputs = Array.from(document.querySelectorAll('.user-input'));
  let bookValues = userInputs.map(input => input.value);

  if(!isInputValid(bookValues)) {
    alert('Please fill out all of the fields.');
    return;
  }

  myLibrary.push(new Book(...bookValues));
  localStorage.setItem('myLibrary', JSON.stringify(myLibrary));
  updateBookshelf(myLibrary);

  userInputs.forEach(input => input.value = '');
}

function initializeBookshelf() {
  let headers = ['Title', 'Author', 'Pages', 'Read Status', 'Remove Book'];
  let headerContainer = document.createElement('tr');

  for (let header of headers) {
    let tableHeader = document.createElement('th');
    tableHeader.textContent = header;

    headerContainer.appendChild(tableHeader);
  }

  bookshelfTable.appendChild(headerContainer);
}

function displayBooks(library) {
  initializeBookshelf();

  library.forEach(book => {
    let newBookContainer = document.createElement('tr');

    for (let info in book) {
      let dataContainer = document.createElement('td');
      dataContainer.textContent = book[info];

      if (book[info] === 'Read') {
        dataContainer.classList.add('read');
      } else if (book[info] === 'Not Yet Read') {
        dataContainer.classList.add('not-yet-read');
      }

      newBookContainer.appendChild(dataContainer);
    }

    let icon = document.createElement('i');
    icon.classList.add('far', 'fa-trash-alt', 'remove-book');

    let dataContainer = document.createElement('td');
    dataContainer.appendChild(icon);
    newBookContainer.appendChild(dataContainer);

    bookshelfTable.appendChild(newBookContainer);
  });

  bookshelfContainer.appendChild(bookshelfTable);

  addBookRowEventListeners();
}

function displayNewBookForm() {
  let addBookForm = document.querySelector('#add-book-form');
  addBookForm.style.display = 'flex';
  addBookForm.style['flex-direction'] = 'column';
  addBookForm.style['align-items'] = 'center';
  displayAddBookFormBtn.style.display = 'none';
}

function removeBookFromLibrary(book) {
  
  let index = myLibrary.indexOf(book);
  myLibrary.splice(index, 1);
  localStorage.setItem('myLibrary', JSON.stringify(myLibrary));

  updateBookshelf(myLibrary);
}

function updateBookshelf(library) {
  while (bookshelfTable.firstChild) {
    bookshelfTable.removeChild(bookshelfTable.firstChild);
  }

  displayBooks(library);
}

function toggleReadStatus(e) {
  if (e.target.className === 'read') {
    e.target.textContent = "Not Yet Read";
    e.target.classList.remove('read');
    e.target.classList.add('not-yet-read');
  } else if (e.target.className === 'not-yet-read') {
    e.target.textContent = "Read";
    e.target.classList.remove('not-yet-read');
    e.target.classList.add('read');
  }
}

function addBookRowEventListeners() {
  const bookRow = document.querySelectorAll('tr');
  
  bookRow.forEach(book => {
    let index = Array.from(book.parentNode.children).indexOf(book) - 1;
   
    book.addEventListener('click', e => {
      if (Array.from(e.target.classList).includes('remove-book')) {
        removeBookFromLibrary(myLibrary[index])
      }

      if (e.target.className === 'read' || e.target.className === 'not-yet-read') { 
        toggleReadStatus(e);
      }
    });
  });
}

function isInputValid(bookValues) {
  return bookValues.every(value => value);
}

if (!localStorage.getItem('myLibrary')) {
  localStorage.setItem('myLibrary', JSON.stringify(myLibrary));
} else {
  myLibrary = JSON.parse(localStorage.getItem('myLibrary'));
}

displayAddBookFormBtn.addEventListener('click', displayNewBookForm);
addBookBtn.addEventListener('click', (e) => {
  e.preventDefault();
  addBookToLibrary();
});

displayBooks(myLibrary);
