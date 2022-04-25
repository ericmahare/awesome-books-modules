/* eslint-disable linebreak-style */
const books = (bks) => {
  let books = JSON.parse(localStorage.getItem('books'));
  if (bks === undefined) {
    return books;
  }
  books = bks;
  return books;
};
export default books;