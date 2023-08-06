const toggleButton = document.getElementsByClassName('toggle-button')[0];
const elements = document.getElementsByClassName('elements')[0];
let elementsActive = false;
toggleButton.addEventListener('click', (event) =>{
  event.preventDefault();
  elements.classList.toggle('active');
  elementsActive = !elementsActive;
  if(elementsActive)
    document.getElementsByClassName('title')[0].style.marginTop = "290px";
  else
  document.getElementsByClassName('title')[0].style.marginTop = "100px";
});