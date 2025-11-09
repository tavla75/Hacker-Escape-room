
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.navmenu');
const closeBtn = document.querySelector('.closeBtn');
const header = document.querySelector('#header');



hamburger.addEventListener('click',toggleMenu);
closeBtn.addEventListener('click', toggleMenu);


const overlay = document.querySelector('.overlay');
if (overlay) overlay.addEventListener('click', () => {
    if (navMenu.classList.contains('active')) toggleMenu();
});



function toggleMenu (){
    navMenu.classList.toggle('active');
    header.classList.toggle('background-state');
}