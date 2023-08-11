// ------------------TOGGLE-BUTTON-------------------
const body = document.querySelector('body');
const btn = document.querySelector('.btnn');
const icon = document.querySelector('.btnn__icon');
// const imgIcon = document.getElementById('Wicon');

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
    if(window.location.href == "http://127.0.0.1:5500/Views/aboutUs1.html"){
      document.getElementById('t').style.backgroundImage = "url(../Images/aboutUsWinter.jpg)";
    }
    // imgIcon.src = "../Images/winterIcon.png";
  }else if(window.location.href == "http://127.0.0.1:5500/Views/aboutUs1.html" && body.classList.contains('wintermode')==false){
    document.getElementById('t').style.backgroundImage = "url(../Images/aboutUsImg.jpeg)";
  }else{
    icon.classList.remove('fa-snowflake');
    icon.classList.add('fa-sun');
    // imgIcon.src = originalImgiconContent;
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