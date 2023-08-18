const elementsToChange = document.querySelectorAll('.summer-mode');
const summerWinterTogglebtn = document.querySelector('.btnn');
const icon = document.querySelector('.btnn__icon');

function changeMode() {
  elementsToChange.forEach(element => {
    element.classList.toggle('winter-mode');
  });
  const wintermode = elementsToChange[0].classList.contains('winter-mode');
  localStorage.setItem('wintermode', wintermode);
  updateIcon(wintermode);
}

function updateIcon(wintermode) {
  console.log('wintermode:', wintermode);
  if (wintermode) {
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-snowflake');
      // ----------------------------------CHANGE TITLE IN HOMEPAGE-----------------------
    if(window.location.href.includes("/Views/index.html")){
      document.querySelector('#sum').innerText = "Winter";
      document.querySelector('#Wicon').src = "../Images/winterIcon.png";
    }
  } else {
    if(window.location.href.includes("/Views/index.html")){
      document.querySelector('#sum').innerText = "Summer";
      document.querySelector('#Wicon').src = "../Images/beach.png";
    }
    icon.classList.remove('fa-snowflake');
    icon.classList.add('fa-sun');
  }
}

// Event listener for the toggle button
summerWinterTogglebtn.addEventListener('click', () => {
  icon.classList.add('animated');
  changeMode();
  setTimeout(() => {
    icon.classList.remove('animated');
  }, 500);
});

// Initial load
function load() {
  const wintermode = localStorage.getItem('wintermode');
  icon.classList.add('animated');
  elementsToChange.forEach(element => {
    element.classList.toggle('winter-mode', wintermode === 'true');
  });
  updateIcon(wintermode === 'true'); 
}
load();


// ----------------------HEAD-SCRIPT---------------------
const toggleButton = document.getElementsByClassName('toggle-buttonn')[0];
const elements = document.getElementsByClassName('elements')[0];
const btnn = document.getElementsByClassName('btnn')[0];
const selectedLang = document.getElementsByClassName('lang-menuu')[0];
toggleButton.addEventListener('click', (event) =>{
  event.preventDefault();
  elements.classList.toggle('active');
  selectedLang.classList.toggle('active');
  btnn.classList.toggle('active');
});

// ----------------------------CHANGE BG-COLOR----------------
const header = document.querySelector('.header');
const scrollTrigger = 200;

window.addEventListener('scroll', ()=>{
  if(window.scrollY >= scrollTrigger){
    header.classList.add('scrolled');
    header.style.backgroundColor = "#00000087";
  }else{
    header.classList.remove('scrolled');
    header.style.backgroundColor = "#0000003b";
  }
})


// --------------------------DISABLE BUTTON------------------
if(window.location.href.includes("/Views/ourStaff1.html")){
  summerWinterTogglebtn.classList.add('disabled');
}

  