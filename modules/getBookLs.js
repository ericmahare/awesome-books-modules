/* eslint-disable linebreak-style */
// get books from the local storage
const getBooksLs = () => JSON.parse(localStorage.getItem('books'));
export default getBooksLs;