const menu_btn = document.getElementsByClassName("menu")[0];
const navBar = document.getElementsByTagName("nav")[0];

menu_btn.addEventListener("click", menuBtnClicked);

function menuBtnClicked() {
    if(menu_btn.classList.contains("menu-open")){
        menu_btn.classList.remove("menu-open");
        navBar.classList.remove("nav-open");
    }
    else{
        menu_btn.classList.add("menu-open");
        navBar.classList.add("nav-open");
    }
}


var slideIndex1 = 0;
showSlidesAuto();

function showSlidesAuto() {
  var i;
  var slide = document.getElementsByClassName("mySlides");
  for (i = 0; i < slide.length; i++) {
    slide[i].style.display = "none";
  }
  slideIndex1++;
  if (slideIndex1 > slide.length) {
    slideIndex1 = 1;
  }
  slide[slideIndex1 - 1].style.display = "block";
  setTimeout(showSlidesAuto, 4000); 
}