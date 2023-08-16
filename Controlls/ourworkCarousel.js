let workCards = document.getElementsByClassName("carousel-card");
let arrowLeft = document.querySelector("img[alt='left-arrow']");
let arrowRight = document.querySelector("img[alt='right-arrow']");
let activeLeft = 0;


arrowRight.addEventListener("click",function(){
    activeLeft++;
    for(let element of workCards)
    {
        element.style.transform = "translateX(-334px)"; 
       
    }

    
});

arrowLeft.addEventListener("click",function(){
    activeLeft--;
    for(let element of workCards)
    {
        element.style.transform = "translateX(+334px)"; 
    
    }
   
});
