import books from './books.js';
import getBooksLs from './getBookLs.js';

const titleCont = document.querySelector('.books-title-1');
// DOM elements
const allBks = document.querySelector('#all-books');
// bo0k list UI
const bookList = () => {
  let result = '';
  if (getBooksLs() === null) {
    allBks.innerHTML = '<h3 class="empty">There are no books available !</h3>';
    titleCont.style.display = 'none';
    return;
  }
  if (books().length === 0) {
    allBks.innerHTML = '<h3 class="empty">There are no books available !</h3>';
    titleCont.style.display = 'none';
    return;
  }
  titleCont.style.display = 'block';
  books().forEach((book) => {
    const { id, title, author } = book;
    const singleBk = `
      <div class="single-book">
        <span>"${title}" by ${author}</span>
        <span class="close"><i class="fa-solid fa-xmark" data-id=${id}></i></span>
      </div>
      `;
    result += singleBk;
  });
  allBks.innerHTML = result;
};
export default bookList;