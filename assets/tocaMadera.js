
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
var iconoFace = document.getElementById("iconoFace");

// iconoInsta.addEventListener("mouseover", function () {
//     iconoInsta.classList.add("spin")
// });

// iconoFace.addEventListener("mouseover", function () {
//     iconoFace.classList.add("spin")
// });
let initialCountdownVal = 20;

let interval = setInterval(function () {
    initialCountdownVal = initialCountdownVal > 0 ? initialCountdownVal -1 : 0;
    
    console.log(initialCountdownVal);
    if (initialCountdownVal >=10 && initialCountdownVal < 21) {
        iconoInsta.classList.add("iconsEntrance")
        iconoFace.classList.add("iconsEntrance")
    }else if (initialCountdownVal < 10 && initialCountdownVal >= 1) {
        iconoInsta.classList.add("spin")
        iconoFace.classList.add("spin")
    }else if (initialCountdownVal === 0) {
        clearInterval(interval)
    };

}, 1000);