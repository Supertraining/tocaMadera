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
      insta.classList.add("spin");
      face.classList.add("spin");
    } else if (initialCountdownVal === 0) {
      clearInterval(interval);
    }
  }, 1000);



  let foot = document.querySelector('footer');
  let insta = document.getElementById("iconoInsta");
  let face = document.getElementById("iconoFace");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {                
      if (entry.isIntersecting) {
        entry.target=(foot).classList.add('footerAnimation');
        entry.target=(insta).classList.add('iconsEntrance');
        entry.target=(face).classList.add('iconsEntrance');
        entry.target=(header).classList.add('headerShow');

      } else {
        entry.target.classList.remove('footerAnimation')
      }
    });
  });

  observer.observe(foot);

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

  const carouselaDiv = document.getElementById('car-a-div');
  const carousela = document.getElementById('carouselExampleIndicators');
  const carouselaInner = document.getElementById('car-a-inner')
  const header = document.getElementById('header')

 const observeCarA = new IntersectionObserver(entries =>
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target=(carousela).classList.add('carouselReSize')
      entry.target=(carouselaInner).classList.add('carouselReSizeInner')
      entry.target=(header).classList.add('headerFadeUp')
      entry.target=(header).classList.remove('headerShow')
      entry.target=(carouselb).classList.remove('carouselReSize')
      entry.target=(carouselbInner).classList.remove('carouselReSizeInner')
    }
  }))

  observeCarA.observe(carouselaDiv)



const mainText = document.getElementById('header-show');

const observeHeader = new IntersectionObserver (entries =>
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target=(header).classList.remove('headerFadeUp');
      entry.target=(header).classList.add('headerShow');
      entry.target=(carousela).classList.remove('carouselReSize')
      entry.target=(carouselaInner).classList.remove('carouselReSizeInner')

    }
  }))

  observeHeader.observe(mainText)


const carouselbDiv = document.getElementById('car-b-div');
const carouselb = document.getElementById('carouselExampleIndicatorsb');
const carouselbInner = document.getElementById('car-b-inner')

const observeCarB = new IntersectionObserver(entries =>
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target=(carouselb).classList.add('carouselReSize')
      entry.target=(carouselbInner).classList.add('carouselReSizeInner')
      entry.target=(carousela).classList.remove('carouselReSize')
      entry.target=(carouselaInner).classList.remove('carouselReSizeInner')
      entry.target=(carouselc).classList.remove('carouselReSize')
      entry.target=(carouselcInner).classList.remove('carouselReSizeInner')

    }
  }))

  observeCarB.observe(carouselbDiv)

const carouselcDiv = document.getElementById('car-c-div');
const carouselc = document.getElementById('carouselExampleIndicatorsc');
const carouselcInner = document.getElementById('car-c-inner')

const observeCarC = new IntersectionObserver(entries =>
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target=(carouselc).classList.add('carouselReSize')
      entry.target=(carouselcInner).classList.add('carouselReSizeInner')
      entry.target=(carouselb).classList.remove('carouselReSize')
      entry.target=(carouselbInner).classList.remove('carouselReSizeInner')
      entry.target=(header).classList.remove('headerShow');
      entry.target=(header).classList.add('headerFadeUp');



    }
  }))

  observeCarC.observe(carouselcDiv)
}