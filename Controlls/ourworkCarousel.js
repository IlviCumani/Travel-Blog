let workCards = document.getElementsByClassName("carousel-card");
let arrowLeft = document.querySelector("img[alt='left-arrow']");
let arrowRight = document.querySelector("img[alt='right-arrow']");
let activeLeft = 0;

for(let i=0;i<workCards.length;i++)
{
    if(i<3)
    {
        continue;
    }
    workCards[i].style.display="none";
}

arrowRight.addEventListener("click",function(){
    workCards[activeLeft].style.display = "none";
    workCards[(activeLeft+3)%workCards.length].style.display="flex";
    activeLeft = (activeLeft+1)%workCards.length;
});

