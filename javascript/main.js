const menuBtn=document.querySelector('.menu-btn_clickbox');
const menu=document.querySelector('.navbar-items');
menuBtn.addEventListener('click',()=>{
    menuBtn.classList.toggle('open');
    menu.classList.toggle('menu-open')
});

const header=document.querySelector('.header-index');
const navBarMobile=document.querySelector('.navBar-mobile');

