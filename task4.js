// На сторінці є форма "Новий користувач"
// У форму вже введені дані користувача
// Потрібно отримати дані з усіх полів та повернути та подати у вигляді наступних змінних
// name, phoneNumber, dataOfBirth, emailAddress
// 


// Ваш код ..
const form = document.querySelector(".array fieldset");
const name = form.querySelector('input[name ="fio"]').value;
const phoneNumber = form.querySelector('input[name="phone"]').value;
const dataOfBirth = form.querySelector('input[name="birthday"]').value;
const emailAddress =form.querySelector('input[name="email"]').value;


module.exports = {
    name,
    phoneNumber,
    dataOfBirth,
    emailAddress
};