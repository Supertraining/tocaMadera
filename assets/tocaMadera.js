
var sidebar = document.getElementById("sidebar");
var burguerBoton = document.getElementById("burgerBoton");

burguerBoton.addEventListener ("click", function () {
    if (sidebar.classList.contains("hideMenu")) {
        sidebar.classList.remove("hideMenu");
        sidebar.classList.add("showMenu");
    } else {
        sidebar.classList.remove("showMenu");
        sidebar.classList.add("hideMenu");
    }
});

var iconoInsta = document.getElementById("iconoInsta");

iconoInsta.addEventListener("mouseover", function () {
   iconoInsta.classList.add("spin")
    });
var iconoInsta = document.getElementById("iconoFace");

iconoInsta.addEventListener("mouseover", function () {
   iconoInsta.classList.add("spin")
    });