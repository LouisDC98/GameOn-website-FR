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
const locationField = document.getElementById('location');  
const checkbox1 = document.getElementById('checkbox1');        // Define checkbox 1 as 'checkbox1'
const checkboxField = document.getElementById('checkbox');  


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
  const isValid = location1.checked || location2.checked || location3.checked || location4.checked || location5.checked || location6.checked;
  updateErrorMessage(locationField, errorLocation, isValid);
  return isValid;
}

function validateCheckbox() {
  const isValid = checkbox1.checked;
  updateErrorMessage(checkboxField, errorCheckbox, isValid);
  return isValid;
}

// /*****************Enable or disable the submit button*****************/
// /**************All boxes must be valid to enable button***************/
function isValid() {
  return !!(
  validateFirstName()
  & validateLastName()
  & validateEmail()
  & validateBirthDate()
  & validateTournois()
  & validateLocation()
  & validateCheckbox());
}
