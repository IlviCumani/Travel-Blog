// ------------------TOGGLE-BUTTON-------------------
const body = document.querySelector('body');
const btn = document.querySelector('.btnn');
const icon = document.querySelector('.btnn__icon');

function store(value){
  localStorage.setItem('wintermode',value);
}

function load(){
  const wintermode = localStorage.getItem('wintermode');

  if(!wintermode){
    store(false);
    icon.classList.add('fa-sun');
  }
  else if(wintermode == 'true'){
    body.classList.add('wintermode');
    icon.classList.add('fa-snowflake');
  }else{
    icon.classList.add('fa-sun');
  }
}

load();

// ----------------DISABLE BUTTON FOR STAFF PAGE------------
if(window.location.href == "http://127.0.0.1:5500/Views/ourStaff1.html"){
  btn.classList.add('disabled');
}

btn.addEventListener('click', ()=>{

  body.classList.toggle('wintermode');
  icon.classList.add('animated');

  //saving true or false
  store(body.classList.contains('wintermode'));

  if(body.classList.contains('wintermode')){
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-snowflake');
    document.getElementById('c2').style.backgroundImage = "url(../Images/snow.jpg)";
    if(window.location.href == "http://127.0.0.1:5500/Views/aboutUs1.html"){
      document.getElementById('t').style.backgroundImage = "url(../Images/aboutUsWinter.jpg)";
    }
    if(window.location.href == "http://127.0.0.1:5500/Views/index.html"){
      document.getElementById('sum').innerText = 'Winter';
      document.getElementById('Wicon').src = "../Images/winterIcon.png";
      document.getElementById('i').style.backgroundImage = "url(../Images/winter.jpeg)";
    }
  }else if(window.location.href == "http://127.0.0.1:5500/Views/aboutUs1.html" && body.classList.contains('wintermode')==false){
    document.getElementById('t').style.backgroundImage = "url(../Images/aboutUsImg.jpeg)";
    document.getElementById('c2').style.backgroundImage = "url(../Images/sand.jpg)";
  }else if(window.location.href == "http://127.0.0.1:5500/Views/index.html" && body.classList.contains('wintermode')==false){
    document.getElementById('i').style.backgroundImage = "url('../Images/seashoree.jpg')";
    document.getElementById('Wicon').src = "../Images/beach.png";
    document.getElementById('sum').innerText = 'Summer';
    document.getElementById('c2').style.backgroundImage = "url(../Images/sand.jpg)";
  }else{
    icon.classList.remove('fa-snowflake');
    icon.classList.add('fa-sun');
    document.getElementById('c2').style.backgroundImage = "url(../Images/sand.jpg)";
  }

  setTimeout(() => {
    icon.classList.remove('animated');
  }, 500);
});

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