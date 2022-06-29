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
const modoverlayal = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");

console.log(showModal);
for (let i = 0; i < showModal.length; i++) {
  console.log(showModal[i].textContent);
}
