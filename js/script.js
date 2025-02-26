let menuIcon  = document.querySelector(".header__icon");
let navContainer = document.querySelector(".header__nav-container");
let img = menuIcon.getElementsByTagName("img")[0];
let ishide = true ;
menuIcon.addEventListener('click', function(){
    navContainer.classList.toggle("hide");
    if(ishide){
        img.src = "images/icon-close.svg";
        ishide = false ;
    }
    else{
       img.src = "images/icon-hamburger.svg"
       ishide =true ;
    }
})