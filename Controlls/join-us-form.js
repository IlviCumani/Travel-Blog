const joinUsPopup = document.getElementById('join-us-popup');

function handlePopupEvent(e) {
    if (e.target === joinUsPopup || e.key === 'Escape') {
        joinUsPopup.classList.add('inactive-popup');
    }
}

window.addEventListener('click', handlePopupEvent);
window.addEventListener('keydown', handlePopupEvent);


//Experiment
const joinUsForm = document.getElementById("join-us-form");
const JoinUsSubmitButton = document.getElementById("join-submit-button");
const requiredInputs = joinUsForm.querySelectorAll("[required]");

console.log(joinUsForm);
console.log(JoinUsSubmitButton);
console.log(requiredInputs);

function disableSubmitButton() {
    JoinUsSubmitButton.disabled = true;
    JoinUsSubmitButton.style.backgroundColor = "red";
    // JoinUsSubmitButton.hover = false;
    // JoinUsSubmitButton.classList.add("disabled");
    // JoinUsSubmitButton.classList.remove("enabled");
}

function enableSubmitButton() {
    JoinUsSubmitButton.disabled = false;
    JoinUsSubmitButton.style.backgroundColor = "green";
    // JoinUsSubmitButton.classList.remove("disabled");
    // JoinUsSubmitButton.classList.add("enabled");
}

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email.value);
}

function validateInputs() {
    let formIsValid = true;

    requiredInputs.forEach((input) => {
        if (!input.value) {
            formIsValid = false;
        }
        if (input.type === "email" && !validateEmail(input)) {
            formIsValid = false;
        }
    });
    return formIsValid;
}


JoinUsSubmitButton.addEventListener("click", () => {
    console.log("clicked");
});

disableSubmitButton();
enableSubmitButton();