/* eslint-disable linebreak-style */
import bookList from './bookList.js';

const addBooksLs = (bks) => {
  const dataToStore = JSON.stringify(bks);
  localStorage.setItem('books', dataToStore);
  bookList();
};

export default addBooksLs;