const menu_btn = document.getElementsByClassName("menu")[0];
const navBar = document.getElementsByTagName("nav")[0];

menu_btn.addEventListener("click", menuBtnClicked);

function menuBtnClicked() {
  if (menu_btn.classList.contains("menu-open")) {
    menu_btn.classList.remove("menu-open");
    navBar.classList.remove("nav-open");
  } else {
    menu_btn.classList.add("menu-open");
    navBar.classList.add("nav-open");
  }
}