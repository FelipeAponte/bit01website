const menu = document.querySelector(".menu");
const openMenuBtn  = document.querySelector(".open-menu");
const closeMenuBtn = document.querySelector(".close-menu");
const sendBtn = document.getElementById("sendBtn");
const modal = document.querySelector(".modal");
const closeModal = document.querySelector(".modal-close");
const modalImage = document.querySelector(".modal-image");

function toggleMenu() {
    menu.classList.toggle("menu_opened");
}

openMenuBtn.addEventListener("click", toggleMenu);
closeMenuBtn.addEventListener("click", toggleMenu);

const menuLinks = document.querySelectorAll('.menu a[href^="#"');

menuLinks.forEach(menuLink => {
    menuLink.addEventListener("click", function(){
        menu.classList.remove("menu_opened");
    });
});

sendBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const response = document.getElementById("response");

    let A = name.value === "";
    let B = email.value == "";

    if (A || B ) {
        modalImage.src = "assets/images/error.png";
        response.textContent = "Por favor ingrese todos los datos solicitados";
    } else {
        modalImage.src = "assets/images/check.png";
        response.textContent = `¡Hola ${name.value}!, gracias por suscribirte a nuestra newsletter.`;
    }

    // console.log(name, message);

    modal.classList.add("modal--show");
    
});

closeModal.addEventListener("click", (e) => {
    e.preventDefault();
    modal.classList.remove("modal--show");
});