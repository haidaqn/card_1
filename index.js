const dangmo = document.querySelector(".js-button-contact");
const modals = document.querySelector(".modal");
const cloess = document.querySelector(".js-cloes");
const sendtoDang = document.querySelector(".js-send");
const noiBot = document.querySelector(".js-modal-chongnoibot");

function modal_open() {
    modals.classList.add("open");
}

function modal_dong() {
    modals.classList.remove("open");
}

function modal_dong1() {
    alert("ban da gui thanh cong....!");
    modals.classList.remove("open");
}
modals.addEventListener("click", modal_dong);
dangmo.addEventListener("click", modal_open);
cloess.addEventListener("click", modal_dong);
sendtoDang.addEventListener("click", modal_dong1);

noiBot.addEventListener("click", function(event) {
    event.stopPropagation();
});