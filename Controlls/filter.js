let filterIcon = document.getElementById("filter-img");
let x = document.getElementById("closing-x");

let price = document.querySelector("input[id='price']");
let numDays = document.getElementById("numberOfDays");
let priceForm = document.getElementsByClassName("price-form")[0];
let daysForm = document.getElementsByClassName("days-form")[0];

let range = document.querySelector("input[type='range']");
let value = document.querySelector("input[type='number']");
let priceSelection = document.getElementById("maxPrice");
let daysSelection = document.getElementById("p-numDays");
let select = document.getElementById("numDays"); 

range.addEventListener("change",function(){
value.value = range.value;
priceSelection.innerText = "Max price : " + range.value;
});

value.addEventListener("change",function(){
range.value=value.value;
priceSelection.innerText = "Max price : " + value.value +" $";
});

filterIcon.addEventListener("click",function(){
    document.getElementById("filter-div").style.display="inline-flex";
});

x.addEventListener("click",function(){
    document.getElementById("filter-div").style.display="none";
});

price.addEventListener("click",function(){
    daysForm.style.display="none";
    togglePrice();
});

numDays.addEventListener("click",function(){
    priceForm.style.display="none";
    toggleDays();

});
    
select.addEventListener("change",function(){
 daysSelection.innerText = "Num of days: " + select.value;   
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
    if(daysForm.style.display==="none" || daysForm.style.display==="")
    { 
        daysForm.style.display = "inline-flex";
    }
    else{
        daysForm.style.display="none";
    }
}