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
// Define X button as 'close' 
const closeModalBtn = document.getElementById('close');   

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", closeModal));

// Call function closeModal when X pressed
closeModalBtn.addEventListener('click', closeModal);      

/*****************Add or remove the bground class*****************/
function closeModal () {
  if(modalbg.classList.contains('bground--visible')) {
    modalbg.classList.remove('bground--visible');
  }
  else {
    modalbg.classList.add('bground--visible');
  }
}

/****************************************************************/
/********************Validate or not the form********************/
/****************************************************************/

// Define all const used for validate each field
const form = document.getElementById('form');
const firstNameField = document.getElementById('first');
const lastNameField = document.getElementById('last');
const emailField = document.getElementById('email');
const birthDateField = document.getElementById('birthdate');
const tournoisField = document.getElementById('quantity');
const locationField = document.getElementById('location');
const checkbox1 = document.getElementById('checkbox1');
const checkboxField = document.getElementById('checkbox');

// Regex which accept mail format
const formatMail = /^[^@]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+$/; 
// Regex with only numbers
const formatNumbers = /^[0-9]+$/;  
// Regex with numbers and -
const formatDate = /[0-9]\-/;                               

/**************Variables for add or remove error class****************/
let errorFirst = document.getElementById('messageFirst');
let errorLast = document.getElementById('messageLast');
let errorEmail = document.getElementById('messageEmail');
let errorBirthdate = document.getElementById('messageBirthdate');
let errorTournois = document.getElementById('messageTournois');
let errorLocation = document.getElementById('messageLocation');
let errorCheckbox = document.getElementById('messageCheckbox');

 function updateErrorMessage(valueField, errorField, isValid) {
   if (isValid) {
     errorField.classList.remove('errors--off');
     valueField.classList.remove('text-control--off');
   }
   else {
    if (!errorField.classList.contains('errors--off')){
      errorField.classList.add('errors--off');
    }

    if (!valueField.classList.contains('text-control--off')){
      valueField.classList.add('text-control--off');
    }
  }
}
/*******************Function for validate each box********************/
function validateFirstName() {
  const isValid = firstNameField.value !== '' && firstNameField.value.length >= 2;
  updateErrorMessage(firstNameField, errorFirst, isValid);
  return isValid;
}

function validateLastName() {
  const isValid = lastNameField.value !== '' && lastNameField.value.length >= 2;
  updateErrorMessage(lastNameField, errorLast, isValid);
  return isValid;
}

function validateEmail() {
  const isValid = emailField.value.match(formatMail) !== null;
  updateErrorMessage(emailField, errorEmail, isValid);
  return isValid;
}

function validateBirthDate() {
  const isValid = birthDateField.value.match(formatDate)!== null;
  updateErrorMessage(birthDateField, errorBirthdate, isValid);
  return isValid;
}

function validateTournois() {
  const isValid = tournoisField.value.match(formatNumbers)!== null;
  updateErrorMessage(tournoisField, errorTournois, isValid);
  return isValid;
}

function validateLocation() {
  const isValid = document.querySelectorAll('input[name="location"]:checked').length > 0;
  updateErrorMessage(locationField, errorLocation, isValid);
  return isValid;
}

function validateCheckbox() {
  const isValid = checkbox1.checked;
  updateErrorMessage(checkboxField, errorCheckbox, isValid);
  return isValid;
}

/*****************Enable or disable the submit button*****************/
/**************All boxes must be valid to enable button***************/
function isValid() {
  return (0 !== (
  validateFirstName()
  & validateLastName()
  & validateEmail()
  & validateBirthDate()
  & validateTournois()
  & validateLocation()
  & validateCheckbox()));
}
