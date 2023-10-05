let popup = document.getElementsByClassName('popup')[0];
let btnLogin = document.getElementsByClassName('button-login')[0];
let btn_login = document.getElementsByClassName('btn-login')[0];
let dropClass = document.getElementsByClassName('classes-content')[0];
// let icon = document.getElementsByClassName('icon')[0];
let nav = document.getElementById('navbar');
let menuTgl = document.querySelector('.menu-toggle input');
let navUl = document.querySelector('nav ul')

btnLogin.addEventListener('click', (e) => {
    e.preventDefault();
    popup.style.display = 'flex'
});
btn_login.addEventListener('click', (e) => {
    e.preventDefault();
    popup.style.display = 'flex'
});

document.getElementsByClassName('close')[0].addEventListener('click', () => {
    popup.style.display = 'none';
})

menuTgl.addEventListener('click', () => {
    navUl.classList.toggle('slide');
    // navUl.className += " slide";
})

// icon.addEventListener('click', (e) => {
//     e.preventDefault();
//     if(nav.className === "nav-menu"){
//         nav.className += " responsive";
//     }
//     else{
//         nav.className = "nav-menu";
//     }
// })
