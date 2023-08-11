const contactForm = document.getElementById("contact-form");
const submitButton = document.getElementById("submit-button");
const requiredInputs = contactForm.querySelectorAll("[required]");
let hasClickedForm = false;
let clickedOutofForm = false;

function disableSubmitButton() {
  submitButton.disabled = true;
  submitButton.hover = false;
  clickedOutofForm = true;
  submitButton.classList.add("disabled");
  submitButton.classList.remove("enabled");
}

function enableSubmitButton() {
  submitButton.disabled = false;
  submitButton.classList.remove("disabled");
  submitButton.classList.add("enabled");
}

function validateInputs() {
  let formIsValid = true;
  requiredInputs.forEach((input) => {
    if (!input.value) {
        formIsValid = false;
        input.classList.remove("super-sexy");
        input.classList.add("error");
    } else {
        input.classList.remove("error");
        input.classList.add("super-sexy");
    }
  });
  return formIsValid;
}

function handleClickOutside(event) {
  if (!contactForm.contains(event.target) && event.target !== contactForm) {
    if (hasClickedForm && !validateInputs()) {
        disableSubmitButton();
    }
  }
}

function handleInputChange() {
  if (requiredInputs[0].value && requiredInputs[1].value && requiredInputs[2].value && requiredInputs[3].value) {
    enableSubmitButton();
  } else {
    if(clickedOutofForm){
        disableSubmitButton();
    }
    // disableSubmitButton();
  }
}

contactForm.addEventListener("click", () => {
  if (!hasClickedForm) {
    console.log("Clicked form for the first time");
  }
  hasClickedForm = true;
//   enableSubmitButton();
});

document.addEventListener('click', handleClickOutside);

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();
  
  if (validateInputs()) {
    contactForm.submit();
  } else {
    disableSubmitButton();
  }
});

requiredInputs.forEach(input => {
  input.addEventListener("input", handleInputChange);
});
