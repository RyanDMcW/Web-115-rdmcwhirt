// JavaScript code for form validation

// Prevent form from submitting
const form = document.querySelector('form');

// Retrieve the input field value
const inputField = document.querySelector('input');
const errorMessage = document.createElement('p');
errorMessage.style.color = 'orange';

// Regular expression pattern for alphanumeric input
const alphaNumericPattern = /^[a-z0-9]+$/i;

// Check if the input value matches the pattern
const inputValue = inputField.value;

// Valid input: display confirmation and submit the form
form.addEventListener('submit', function(event) {
  const inputValue = inputField.value;

  if (alphaNumericPattern.test(inputValue)) {
    alert("Input is valid. Form submitted!");
  } else {
    // Invalid input: display error message and prevent form submission
    event.preventDefault();
    errorMessage.textContent = "Please enter a valid alphanumeric value. (a-z, 0-9)";
    form.appendChild(errorMessage);
  }
});
