import SuccessReg from './alfabet/success-reg.js';
 
const form = document.querySelector('#form');
const nameInput = document.querySelector('#name');
const successReg = new SuccessReg();
 
// Обробка події натискання кнопки «Submit»
form.addEventListener('submit', (event) => {
    event.preventDefault();                 // не перезавантажувати сторінку
    successReg.writeName(nameInput.value);  // показати popup і вивести ім'я по літерах
});
