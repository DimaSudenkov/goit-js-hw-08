import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const keyEmailMessage = "feedback-form-state";

form.addEventListener('input', throttle(handlerInput, 500));

let dataForm = JSON.parse(localStorage.getItem(keyEmailMessage)) || {};
const { email, message } = form.elements;

function handlerInput() {
  dataForm = { email: email.value, message: message.value };
  localStorage.setItem(keyEmailMessage, JSON.stringify(dataForm));
}

form.addEventListener('submit', handlerSubmit);

function handlerSubmit(evt) {
  evt.preventDefault()
  const { email, message } = evt.currentTarget.elements;
  if (email.value === '' || message.value === '') {
    return alert('Please fill in all the fields!');
  }
  console.log({ email: email.value, message: message.value });
  localStorage.removeItem(keyEmailMessage);
  evt.currentTarget.reset();
}
