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