function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

/****************************************************************/
/**********************Open and close modal**********************/
/****************************************************************/

const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeModalBtn = document.getElementById('close');   // Define X button as 'close' 

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", closeModal));
closeModalBtn.addEventListener('click', closeModal);      // Call function closeModal when X pressed

/*****************Add or remove the bground class*****************/
function closeModal () {
  modalbg.classList.toggle('bground--visible');
}

/****************************************************************/
/********************Validate or not the form********************/
/****************************************************************/

const form = document.getElementById('form') ;                 // Define form as 'form'
const firstNameField = document.getElementById('first') ;      // Define input first as 'firstNameField'
const lastNameField = document.getElementById('last') ;        // Define input last as 'lastNameField'
const emailField = document.getElementById('email');           // Define input email as 'email'
const birthDateField = document.getElementById('birthdate');   // Define birthdate as 'birthdate'
const tournoisField = document.getElementById('quantity');     // Define input quantity as 'tournois'
const location1 = document.getElementById('location1') ;       // Define radio 1 as 'location1'
const location2 = document.getElementById('location2');        // Define radio 2 as 'location2'
const location3 = document.getElementById('location3');        // Define radio 3 as 'location3'
const location4 = document.getElementById('location4');        // Define radio 4 as 'location4'
const location5 = document.getElementById('location5');        // Define radio 5 as 'location5'
const location6 = document.getElementById('location6');        // Define radio 6 as 'location6'
const checkbox1 = document.getElementById('checkbox1');        // Define checkbox 1 as 'checkbox1'

// Regex which accept mail format
const formatMail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+$/; 
// Regex with only numbers
const formatNumbers = /^[0-9]+$/;  
// Regex with numbers and -
const formatDate = /[0-9]\-/;                               

/**************Variables for add or remove error class****************/
let errorFirst = document.getElementById ('messageFirst');
let errorLast = document.getElementById ('messageLast');
let errorEmail = document.getElementById ('messageEmail');
let errorBirthdate = document.getElementById ('messageBirthdate');
let errorTournois = document.getElementById ('messageTournois');
let errorLocation = document.getElementById ('messageLocation');
let errorCheckbox = document.getElementById ('messageCheckbox');
let submitBtn = document.getElementById ('subBtn');

/*******************Function for validate each box********************/
function validateFirst() {
  const result = firstNameField.value !== '' && firstNameField.value.length >= 2;
  if (!result) {
    errorFirst.classList.add('errors--off');
    firstNameField.classList.add('text-control--off');
  }
  else {
    errorFirst.classList.remove('errors--off');
    firstNameField.classList.remove('text-control--off');
  }
  return result;
}

function validateLast() {
  const result = lastNameField.value !== '' && lastNameField.value.length >= 2;
  if (!result) {
    errorLast.classList.add ('errors--off');
    lastNameField.classList.add('text-control--off');
  }
  else {
    errorLast.classList.remove('errors--off');
    lastNameField.classList.remove('text-control--off');
  }
  return result;
}

function validateEmail() {
  const result = emailField.value.match(formatMail) !== null;
  if (!result) {
    errorEmail.classList.add('errors--off');
    emailField.classList.add('text-control--off');
  }
  else {
    errorEmail.classList.remove('errors--off');
    emailField.classList.remove('text-control--off');
  }
  return result;
}

function validateBirthDate() {
  const result = birthDateField.value.match(formatDate)!== null;
  if (!result) {
    errorBirthdate.classList.add('errors--off');
  }
  else {
    errorBirthdate.classList.remove('errors--off');
  }
  return result;
}

function validateTournois() {
  const result = tournoisField.value.match(formatNumbers)!== null;
  if (!result) {
    errorTournois.classList.add('errors--off');
  }
  else {
    errorTournois.classList.remove('errors--off');
  }
  return result;
}

function validateLocation() {
  const result = location1.checked || location2.checked || location3.checked || location4.checked || location5.checked || location6.checked;
  if (!result) {
    errorLocation.classList.add('errors--off');
  }
  else {
    errorLocation.classList.remove('errors--off');
  }
  return result;
}

function validateCheckbox() {
  const result = checkbox1.checked;
  if (!result) {
    errorCheckbox.classList.add('errors--off');
  }
  else {
    errorCheckbox.classList.remove('errors--off');
  }
  return result; 
}

/*****************Enable or disable the submit button*****************/
/**************All boxes must be valid to enable button***************/
function isValid() {

  return !!(validateFirst()
  & validateLast()
  & validateEmail()
  & validateBirthDate()
  & validateTournois()
  & validateLocation()
  & validateCheckbox());
}
