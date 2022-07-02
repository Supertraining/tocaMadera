if (typeof window !== 'undefined') {
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



  let foot = document.querySelector('footer');
  let insta = document.getElementById("iconoInsta");
  let face = document.getElementById("iconoFace");
  let whapp = document.getElementById("iconoWhapp")

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {                
      if (entry.isIntersecting) {
        entry.target=(foot).classList.add('footerAnimation');
        entry.target=(insta).classList.add('iconsEntrance');
        entry.target=(face).classList.add('iconsEntrance');
        entry.target=(whapp).classList.add('iconsEntrance');
      } else {
        entry.target.classList.remove('footerAnimation')
      }
    });
  });

  observer.observe(foot);
  // observer.observe(insta);
  // observer.observe(face);
  // observer.observe()

  let divParrafo = document.getElementById("divParrafo");
  let parrafo = document.getElementById("parrafo");

  const observerP = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target=(parrafo).classList.remove('hide')
        entry.target=(parrafo).classList.add('show');
    } else {
      entry.target=(parrafo).classList.remove('show')
    }
    });
  });

  
  observerP.observe(divParrafo);
}

