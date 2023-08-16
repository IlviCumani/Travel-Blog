const elementsToChange = document.querySelectorAll('.summer-mode');
const summerWinterTogglebtn = document.querySelector('.btnn');
console.log(summerWinterTogglebtn);
console.log(elementsToChange);

function changeMode(){
    elementsToChange.forEach(element => {
        element.classList.toggle('winter-mode');
        localStorage.setItem('wintermode', element.classList.contains('winter-mode'));
    });
}

summerWinterTogglebtn.addEventListener('click', changeMode);

const loadedMode = localStorage.getItem('wintermode');
if(loadedMode === 'true'){
    changeMode();
    // summerWinterTogglebtn.classList.add('btnn--active');
}

// function changeToWinterMode(){
//     elementsToChange.forEach(element => {
//         element.classList.remove('summer-mode');
//         element.classList.add('winter-mode');
//     }
//     );
// }

// function changeToSummerMode(){
//     elementsToChange.forEach(element => {
//         element.classList.remove('winter-mode');
//         element.classList.add('summer-mode');
//     }
//     );
// }

// summerWinterTogglebtn.addEventListener('click', function(){
//     console.log('clicked');
//     if(summerWinterTogglebtn.classList.contains('btnn--active')){
//         summerWinterTogglebtn.classList.remove('btnn--active');
//         localStorage.setItem('wintermode', 'false');
//         changeToSummerMode();
//     }else{
//         summerWinterTogglebtn.classList.add('btnn--active');
//         changeToWinterMode();
//         localStorage.setItem('wintermode', 'true');
//     }
//     console.log(elementsToChange);
// });

