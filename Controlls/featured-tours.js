let cards = document.getElementsByClassName("cards");
let horizontalCards = document.getElementsByClassName("horizontal-cards");

for(let card of cards)
{
    card.addEventListener("mouseenter",function(){
       card.getElementsByClassName("hidden")[0].style.display="block";
    });
}

for(let card of cards)
{
    card.addEventListener("mouseleave",function(){
       card.getElementsByClassName("hidden")[0].style.display="none";
    });
}

for(let card of horizontalCards)
{
    card.addEventListener("mouseenter",function(){
        
    });
}
