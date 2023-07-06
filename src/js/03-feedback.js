var throttle = require('lodash.throttle');

const refs = {
  email: document.querySelector('input[name="email"]'),
  message: document.querySelector('textarea[name="message"]'),
  form: document.querySelector('.feedback-form'),
};
const STORAGE_KEY = 'feedback-form-state';

refs.form.addEventListener('submit', onFormSubmit);
refs.email.addEventListener('input', throttle(onTextInput, 500));
refs.message.addEventListener('input', throttle(onTextInput, 500));

populateTextArea();

function onFormSubmit(e) {
  e.preventDefault();

  const formData = {
    email: refs.email.value,
    message: refs.message.value,
  };

  console.log(formData);

  e.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function onTextInput() {
  const formData = {
    email: refs.email.value,
    message: refs.message.value,
  };

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function populateTextArea() {
  const storedData = localStorage.getItem(STORAGE_KEY);

  if (storedData) {
    console.log('Data is stored');
    const formData = storedData;
    try {
      refs.email.value = JSON.parse(formData.email);
      refs.message.value = JSON.parse(formData.message);
    } catch (error) {
      console.error('Error parsing JSON data:', error);
    }
  }
}
