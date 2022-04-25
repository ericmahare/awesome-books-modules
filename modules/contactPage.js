// get DOM elements
const titleCont = document.querySelector('.books-title-1');
const contLink = document.querySelector('#contact');
const bkContainer = document.querySelector('#books');

const contactPage = () => {
  titleCont.style.display = 'none';
  contLink.addEventListener('click', () => {
    const result = `
      <h1 class="books-title">Contact Information</h1>
      <p class="contact-text">Do have any questions or you just want to say "Hello"? you can reach out to us</p>
      <ul class="contact-list ">
        <li>our email: mail.mail.com</li>
        <li>our phone number: 00435674839</li>
        <li>Our addressname: streetname 22, 84503 City, Country</li>
      </ul>
    `;
    bkContainer.innerHTML = result;
  });
};

export default contactPage;