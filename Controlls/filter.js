let filterIcon = document.getElementById("filter-img");
let x = document.getElementById("closing-x");

let price = document.querySelector("input[id='price']");
let numDays = document.getElementById("numberOfDays");
let priceForm = document.querySelector("form[class='price-form']");

filterIcon.addEventListener("click",function(){
    document.getElementById("filter-div").style.display="inline-flex";
});

x.addEventListener("click",function(){
    document.getElementById("filter-div").style.display="none";
});

price.addEventListener("click",function(){
togglePrice();
});

numDays.addEventListener("click",function(){

});

function togglePrice()
{
    if(priceForm.style.display=="none")
    {
        priceForm.style.display = "inline-flex";
    }
    else{
        priceForm.style.display="none";
    }
}

function toggleDays(){

}