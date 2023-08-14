let workCards = document.getElementsByClassName("carousel-card");
let arrowLeft = document.querySelector("img[alt='left-arrow']");
let arrowRight = document.querySelector("img[alt='right-arrow']");

for(let i=0;i<workCards.length;i++)
{
    if(i<3)
    {
        continue;
    }
    workCards[i].style.display="none";
}

arrowLeft.addEventListener("click",function(){
    
});