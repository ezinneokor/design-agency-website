// HEADER SECTION TOGGLER
const hamburger = document.querySelector("#hamburger");
const close = document.querySelector("#close");
const navUl = document.querySelector("#nav-ul");

hamburger.addEventListener("click", () =>{
    navUl.classList.toggle("show");
    hamburger.classList.toggle("hide");
});

close.addEventListener("click", () =>{
    navUl.classList.toggle("show");
    hamburger.classList.toggle("hide");
});

// MODAL SECTION
const modal = document.querySelector(".modal");
const btn = document.querySelector(".search");
const closeModal = document.querySelector(".close-modal");

btn.addEventListener("click", openPopup);
closeModal.addEventListener("click", closePopup);

function openPopup(){
    modal.style.display = "block";
}

function closePopup(){
    modal.style.display = "none";
}

// PAGE ANIMATION
AOS.init({
    duration:1000,
});