var sidebar = document.getElementById("sidebar");
var burguerBoton = document.getElementById("burgerBoton");

burguerBoton.addEventListener("click", function () {
  if (sidebar.classList.contains("hideMenu")) {
    sidebar.classList.remove("hideMenu");
    sidebar.classList.add("showMenu");
  } else {
    sidebar.classList.remove("showMenu");
    sidebar.classList.add("hideMenu");
  }
});


let initialCountdownVal = 20;

let interval = setInterval(function () {
  initialCountdownVal = initialCountdownVal > 0 ? initialCountdownVal - 1 : 0;
 if (initialCountdownVal < 10 && initialCountdownVal >= 1) {
    iconoInsta.classList.add("spin");
    iconoFace.classList.add("spin");
  } else if (initialCountdownVal === 0) {
    clearInterval(interval);
  }
}, 1000);




const observer = new IntersectionObserver(entries => {
  // Loop over the entries
  entries.forEach(entry => {                
    // If the element is visible
    if (entry.isIntersecting) {
      // Add the animation class
      entry.target=(foot).classList.add('footerAnimation');
      entry.target=(insta).classList.add('iconsEntrance');
      entry.target=(face).classList.add('iconsEntrance');

     
    } else {
      entry.target.classList.remove('footerAnimation')
    }
  });
});

let foot = document.querySelector('footer');
let insta = document.getElementById("iconoInsta");
let face = document.getElementById("iconoFace");
observer.observe(foot);
observer.observe(insta);
observer.observe(face);