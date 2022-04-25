import addBooksLs from './addBooksLs.js';
import bookList from './bookList.js';
import books from './books.js';
// get all books from the local storage
class DeleteBook {
  static delete = () => {
    document.addEventListener('click', (e) => {
      if (e.target.classList.contains('fa-xmark')) {
        const id = parseInt(e.target.dataset.id, 10);
        const bks = books().filter((book) => book.id !== id);
        books(bks);
        // update DOM content
        bookList();
        // store updated data to local storage
        addBooksLs(bks);
      }
    });
  }
}
export default DeleteBook;