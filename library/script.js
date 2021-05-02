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

// this function will be called upon clicking an add book button
function addBookToLibrary(book) {
  // take user input and push new Book(user input) onto myLibrary.
  // let [userInput]; // extract from DOM inputs
  // myLibrary.push(new Book(...userInput));

  myLibrary.push(book);
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
      newBookContainer.appendChild(dataContainer);
    }

    let dataContainer = document.createElement('td');
    dataContainer.textContent = '[X]';
    dataContainer.classList.add('remove-book');
    newBookContainer.appendChild(dataContainer);

    bookshelfTable.appendChild(newBookContainer);
  });

  bookshelfContainer.appendChild(bookshelfTable);
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

  updateBookshelf(myLibrary);
}

function updateBookshelf(library) {
  while (bookshelfTable.firstChild) {
    bookshelfTable.removeChild(bookshelfTable.firstChild);
  }

  displayBooks(library);
}

displayAddBookFormBtn.addEventListener('click', displayNewBookForm);
addBookBtn.addEventListener('click', (e) => {
  e.preventDefault();
  // addBookToLibrary(...userinput)
})

// test books for display
addBookToLibrary(new Book('Test 1', 'Ricky', '234', 'not yet read'))
addBookToLibrary(new Book('Test 2', 'Martha', '352', 'read'));
addBookToLibrary(new Book('Test 3', 'Jones', '654', 'not yet read'));

displayBooks(myLibrary);
