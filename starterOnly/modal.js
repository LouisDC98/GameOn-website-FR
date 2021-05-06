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

const form = document.getElementById ('form') ;            // Define form as 'form'
const firstName = document.getElementById ('first') ;      // Define input firstName as 'firstName'
const lastName = document.getElementById ('last') ;        // Define input lastName as 'lastName'
const email = document.getElementById ('email');           // Define input email as 'email'
const birthdate = document.getElementById ('birthdate');   // Define birthdate as 'birthdate'
const tournois = document.getElementById ('quantity');     // Define input quantity as 'tournois'
const location1 = document.getElementById ('location1') ;  // Define radio 1 as 'location1'
const location2 = document.getElementById ('location2');   // Define radio 2 as 'location2'
const location3 = document.getElementById ('location3');   // Define radio 3 as 'location3'
const location4 = document.getElementById ('location4');   // Define radio 4 as 'location4'
const location5 = document.getElementById ('location5');   // Define radio 5 as 'location5'
const location6 = document.getElementById ('location6');   // Define radio 6 as 'location6'
const checkbox1 = document.getElementById ('checkbox1');   // Define checkbox 1 as 'checkbox1'

const formatMail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+$/;    // Create regex with mail format
const formatNumbers = /^[0-9]+$/;                           // Create regex with only numbers
const formatDate = /[0-9]\-/;                            // Create regex with numbers and /

/*******************Function for validate each box********************/
function validateFirst() {
  let result = false;
  if (firstName.value === '' || firstName.lenght < 2) {
  }
  else {
    result = true;
  }
  return result;
}

function validateLast() {
  let result = false;
  if (lastName.value === '' || lastName.lenght < 2) {
  }
  else {
    result = true;
  }
  return result;
}

function validateEmail() {
  let result = false;
  if (!email.value.match(formatMail)) {
  }
  else {
    result = true;
  }
  return result;
}

function validateBirthdate() {
  let result = false;
  if (!birthdate.value.match(formatDate)){
  }
  else {
    result = true;
  }
  return result;
}

function validateTournois() {
  let result = false;
  if (!quantity.value.match(formatNumbers)){
  } 
  else {
    result = true;
  }
  return result;
}

function validateLocation() {
  let result = false;
  if (!location1.checked && !location2.checked && !location3.checked && !location4.checked && !location5.checked && !location6.checked) {
  }
  else {
    result = true;
  }
  return result;
}

function validateCheckbox() {
  let result = false;
  if (!checkbox1.checked) {
  }
  else {
    result = true;
  }
  return result; 
}

/*****************Enable or disable the submit button*****************/
/**************All boxes must be valid to enable button***************/
function validate() {
  let result = 1;
  result &= validateFirst();
  result &= validateLast();
  result &= validateEmail();
  result &= validateBirthdate();
  result &= validateTournois();
  result &= validateLocation();
  result &= validateCheckbox();

  return result === 0 ? false : true;
}
