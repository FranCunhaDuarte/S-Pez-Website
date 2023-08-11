const menuBtn=document.querySelector('.menu-btn_clickbox');
const menu=document.querySelector('.navbar-items');
menuBtn.addEventListener('click',()=>{
    menuBtn.classList.toggle('open');
    menu.classList.toggle('menu-open')
});

const header=document.querySelector('.header-index');
const navBarMobile=document.querySelector('.navBar-mobile');


function myFunction(x) {
    if (x.matches) {
        header.removeChild(navBarMobile);
        document.body.style.backgroundColor = "lightblue";
    } else {
        document.body.style.backgroundColor = "pink";
    }
  }
  
  var x = window.matchMedia("(min-width: 1024px)");
  myFunction(x);
  x.addListener(myFunction);