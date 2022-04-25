import addBooksLs from './addBooksLs.js';
import result from './addPageUi.js';
import bookList from './bookList.js';
import books from './books.js';
import getBooksLs from './getBookLs.js';
// DOM elements
const addLink = document.querySelector('#add');
const bkContainer = document.querySelector('#books');

// Add functionality
class AddBooks {
  static add = () => {
    addLink.addEventListener('click', () => {
      bkContainer.innerHTML = result;
      const title = document.querySelector('#title');
      const author = document.querySelector('#author');
      const addBtn = document.querySelector('#btn-add');
      const error = document.querySelector('#error');

      addBtn.addEventListener('click', () => {
        const bkTitle = title.value;
        const bkAuthor = author.value;

        // check if the input value is empty
        if (bkTitle === '' || bkAuthor === '') {
          error.style.cssText = `
          display: block;
          color: red;
        `;
          error.textContent = 'all the fields are required';
          setTimeout(() => {
            error.style.display = 'none';
          }, 2000);
          return;
        }
        const newBook = {
          id: Math.floor(Math.random() * 1000 + 1),
          title: bkTitle,
          author: bkAuthor,
        };

        let bks;
        if (getBooksLs() === null) {
          bks = [];
        } else {
          bks = getBooksLs();
        }
        bks.push(newBook);

        books(bks);
        // store books to local storage
        addBooksLs(bks);
        // update DOM
        bookList();
        // clear the input fields
        title.value = '';
        author.value = '';
        // add succes message
        error.style.cssText = `
          display: block;
          color:green;
        `;
        error.textContent = 'Book added successfully!';
        setTimeout(() => {
          error.style.display = 'none';
        }, 2000);
      });
    });
  }
}

export default AddBooks;