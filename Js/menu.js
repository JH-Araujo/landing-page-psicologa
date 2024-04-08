var menuButton = document.getElementById("menu-button");
var menu = document.getElementById("menu");
var optionButton = document.getElementsByClassName("options")

menuButton.addEventListener("click", function() {
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
});

function closeMenu(){
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
}