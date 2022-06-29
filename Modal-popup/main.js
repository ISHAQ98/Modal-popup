const btnOpen = document.getElementById("open");
const btnClose = document.getElementById("close");
const modal_container = document.getElementById("modal_container");

btnOpen.addEventListener("click", () => {
  modal_container.classList.add("show");
});

btnClose.addEventListener("click", () => {
  modal_container.classList.remove("show");
});


// Version 2 of modal window
const showModal = document.querySelectorAll(".show-modal");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");

const openModal = function () {
  modal.classList.remove("hidden"); // passing the class name without the dot
  overlay.classList.remove("hidden");
};

for (let i = 0; i < showModal.length; i++)
  showModal[i].addEventListener("click", openModal);
/*  console.log("btn clicked");
    modal.classList.remove("hidden"); // passing the class name without the dot
    overlay.classList.remove("hidden"); */

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};
btnCloseModal.addEventListener("click", closeModal);

//handling an esc keypress / keydown keyup event to close the modal window 

const keyEsc = function (e){
if(e.key === 'Escape' && !modal.classList.contains('hidden')){


document.addEventListener('keydown', keyEsc)


