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
