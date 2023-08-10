let filterIcon = document.getElementById("filter-img");
let x = document.getElementById("closing-x");

let price = document.querySelector("input[id='price']");
let numDays = document.getElementById("numberOfDays");
let priceForm = document.getElementsByClassName("price-form")[0];

let range = document.querySelector("input[type='range']");
let value = document.querySelector("input[type='number']");

range.addEventListener("change",function(){
value.value = range.value;
});

value.addEventListener("change",function(){
range.value=value.value;
});

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
    if(priceForm.style.display==="none" || priceForm.style.display==="")
    { 
        priceForm.style.display = "inline-flex";
    }
    else{
        priceForm.style.display="none";
    }
}

function toggleDays(){

}