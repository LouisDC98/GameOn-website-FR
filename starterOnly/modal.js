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

const form = document.getElementById('form') ;            // Define form as 'form'
const firstNameField = document.getElementById('first') ;      // Define input first as 'firstNameField'
const lastNameField = document.getElementById('last') ;        // Define input last as 'lastNameField'
const emailField = document.getElementById('email');           // Define input email as 'email'
const birthDateField = document.getElementById('birthdate');   // Define birthdate as 'birthdate'
const tournoisField = document.getElementById('quantity');     // Define input quantity as 'tournois'
const location1Field = document.getElementById('location1') ;  // Define radio 1 as 'location1'
const location2 = document.getElementById('location2');   // Define radio 2 as 'location2'
const location3 = document.getElementById('location3');   // Define radio 3 as 'location3'
const location4 = document.getElementById('location4');   // Define radio 4 as 'location4'
const location5 = document.getElementById('location5');   // Define radio 5 as 'location5'
const location6 = document.getElementById('location6');   // Define radio 6 as 'location6'
const checkbox1 = document.getElementById('checkbox1');   // Define checkbox 1 as 'checkbox1'

const formatMail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+$/;    // Create regex with mail format
const formatNumbers = /^[0-9]+$/;                           // Create regex with only numbers
const formatDate = /[0-9]\-/;                               // Create regex with numbers and /

/*******************Function for validate each box********************/

function validateFirst() {
  return firstNameField.value !== '' && firstNameField.value.length >= 2;
}

function validateLast() {
  return lastNameField.value !== '' && lastNameField.value.length >= 2;
}

function validateEmail() {
  return emailField.value.match(formatMail) !== null;
}

function validateBirthDate() {
  return birthDateField.value.match(formatDate)!== null;
}

function validateTournois() {
  return tournoisField.value.match(formatNumbers)!== null;
}

function validateLocation() {
  return location1.checked || location2.checked || location3.checked || location4.checked || location5.checked || location6.checked;
}

function validateCheckbox() {
  return checkbox1.checked; 
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
