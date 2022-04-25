/* eslint-disable linebreak-style */
// get list link DOM element
const listLink = document.querySelector('#list');
const listPage = () => {
  listLink.addEventListener('click', () => {
    window.location.reload();
  });
};

export default listPage;