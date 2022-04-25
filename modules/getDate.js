/* eslint-disable linebreak-style */
import * as luxon from '../library/luxon.js';

const dateContainer = document.querySelector('.date-container');

const getDate = () => {
  const date = luxon.DateTime.now().c;
  const {
    day, hour, minute, month, year, second,
  } = date;
  const data = `
  <p>
    ${day}-${month}-${year} ${hour}:${minute}:${second}   
  </p>
  `;
  dateContainer.innerHTML = data;
};
export default getDate;