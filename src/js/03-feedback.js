import { throttle } from 'lodash.throttle';
var throttle = require('lodash.throttle');


function loadFormState() {
    const storedState = localStorage.getItem("feedback-form-state");
    if (storedState) {
      const { email, message } = JSON.parse(storedState);
      document.querySelector('input[name="email"]').value = email;
      document.querySelector('textarea[name="message"]').value = message;
    }
  }
  
  function saveFormState() {
    const email = document.querySelector('input[name="email"]').value;
    const message = document.querySelector('textarea[name="message"]').value;
    const formState = { email, message };
    localStorage.setItem("feedback-form-state", JSON.stringify(formState));
  }
  
  function submitForm(event) {
    event.preventDefault();
    const email = document.querySelector('input[name="email"]').value;
    const message = document.querySelector('textarea[name="message"]').value;
    const formData = { email, message };
    
    console.log("Form Data:", formData);
    
    document.querySelector('input[name="email"]').value = "";
    document.querySelector('textarea[name="message"]').value = "";
    
    localStorage.removeItem("feedback-form-state");
  }
  
  const saveFormStateThrottled = _.throttle(saveFormState, 500);
  
  document.addEventListener("DOMContentLoaded", loadFormState);
  document.querySelector('.feedback-form').addEventListener("input", saveFormStateThrottled);
  document.querySelector('.feedback-form').addEventListener("submit", submitForm);