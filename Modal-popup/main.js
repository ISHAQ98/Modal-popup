const btnOpen = document.getElementById("open");
const btnClose = document.getElementById("close");
const modal_container = document.getElementById("modal_container");

btnOpen.addEventListener("click", () => {
  modal_container.classList.add("show");
});

btnClose.addEventListener("click", () => {
  modal_container.classList.remove("show");
});
