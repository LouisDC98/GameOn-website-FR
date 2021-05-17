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
modalBtn.forEach((btn) => btn.addEventListener("click", displayMainModal));

// Call function closeModal when X pressed
closeModalBtn.addEventListener('click', displayMainModal);

/*****************Add or remove the bground class*****************/
function displayMainModal() {
  if (modalbg.classList.contains('bground--visible')) {
    modalbg.classList.remove('bground--visible');
  }
  else {
    modalbg.classList.add('bground--visible');
  }
}

/*********************************************************************/
/****************Display and close validation message*****************/
/*********************************************************************/

const validationSub = document.getElementById('validation-sub');
const submitBtn = document.getElementById('subBtn');

// Call function addValidationModal when submiBtn pressed
submitBtn.addEventListener('click', addValidationModal);

/*************Close field modal and open validation modal*************/
function addValidationModal() {
  if (isValid()) {
    modalbg.classList.remove('bground--visible');
    validationSub.classList.add('validation-body--vis');
  }
}

const closeValid = document.getElementById('close-valid');
const closeValidBtn = document.getElementById('close-valid-btn');

// Call function closeValidationModal when closeValid or closeValidBtn pressed
closeValid.addEventListener('click', closeValidationModal);
closeValidBtn.addEventListener('click', closeValidationModal);

/*************Close validation modal*************/
function closeValidationModal() {
  if (validationSub.classList.contains('validation-body--vis')) {
    validationSub.classList.remove('validation-body--vis');
  }
}
