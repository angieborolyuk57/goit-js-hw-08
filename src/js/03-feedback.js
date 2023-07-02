import throttle from 'lodash/throttle';

const refs={
    email: document.querySelector('.email'),
    message: document.querySelector('.message'),
    form: document.querySelector('.feedback-form'),

}

const STORAGE_KEY = 'feedback-form-state';


refs.form.addEventListener('submit', onFormSubmit);
refs.email.addEventListener('input', throttle(onTextInput, 1000));
refs.message.addEventListener('input', throttle(onTextInput, 1000));

populateTextArea();


function onFormSubmit(e) {
e.preventDefault();
console.log('Sending form');
e.currentTarget.reset();
localStorage.removeItem(STORAGE_KEY)
}

function onTextInput(e) {
    const textInput = e.currentTarget.value;

    localStorage.setItem(STORAGE_KEY, textInput);

}

function populateTextArea() {
    const storedData = localStorage.getItem(STORAGE_KEY);

  if (storedData) {
      console.log('Data is stored');
      refs.message.value = storedData;
      refs.email.value = storedData;
    
}
}



