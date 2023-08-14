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