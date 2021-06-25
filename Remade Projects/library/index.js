class Book {
  constructor(author, title, pages, readStatus = false) {
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
    myLibrary[index] = { author, title, pages, readStatus }
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
  

  return {  }
})();
