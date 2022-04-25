/* eslint-disable linebreak-style */
import AddBooks from './modules/addBooks.js';
import bookList from './modules/bookList.js';
import contactPage from './modules/contactPage.js';
import DeleteBook from './modules/deleteBook.js';
import getDate from './modules/getDate.js';
import listPage from './modules/listPage.js';

document.addEventListener('DOMContentLoaded', () => {
  // add books to the dom after the page has loaded
  bookList();
  // add book methed
  AddBooks.add();
  // delete book method
  DeleteBook.delete();
  // contact page
  contactPage();
  // list page
  listPage();
  document.querySelector('.books-title-1').style.display = 'block';
  getDate();
});