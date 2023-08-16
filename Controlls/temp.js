const elementsToChange = document.querySelectorAll('.summer-mode');
const summerWinterTogglebtn = document.querySelector('.btnn');
const icon = document.querySelector('.btnn__icon');

function changeMode() {
  elementsToChange.forEach(element => {
    element.classList.toggle('winter-mode');
  });
  const wintermode = elementsToChange[0].classList.contains('winter-mode');
  localStorage.setItem('wintermode', wintermode);
  updateIcon(wintermode);
}

function updateIcon(wintermode) {
  if (wintermode) {
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-snowflake');
  } else {
    icon.classList.remove('fa-snowflake');
    icon.classList.add('fa-sun');
  }
}

// Event listener for the toggle button
summerWinterTogglebtn.addEventListener('click', () => {
  icon.classList.add('animated');
  changeMode();
  setTimeout(() => {
    icon.classList.remove('animated');
  }, 500);
});

// Initial load
function load() {
  const wintermode = localStorage.getItem('wintermode');
  icon.classList.add('animated');
  elementsToChange.forEach(element => {
    element.classList.toggle('winter-mode', wintermode === 'true');
  });
  updateIcon(wintermode === 'true');
}
load();
