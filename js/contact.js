const form = document.querySelector("form");
const name = document.querySelector("#name");
const address = document.querySelector("#address");
const email = document.querySelector("#email");
const subject = document.querySelector("#subject");
const success = document.querySelector("#success");
const button = document.querySelector("button");

function checkIfButtonIsDisabled() {
    if (checkLength(name.value, 1) && checkLength(address.value, 25) && validateEmail(email.value) && checkLength(subject.value, 10)) {
        button.disabled = false;
    } else {
        success.innerHTML = "";
        button.disabled = true;
    }
}

name.addEventListener("keyup", checkIfButtonIsDisabled);
address.addEventListener("keyup", checkIfButtonIsDisabled);
email.addEventListener("keyup", checkIfButtonIsDisabled);
subject.addEventListener("keyup", checkIfButtonIsDisabled);

function submitForm(event) {
    event.preventDefault();
    success.innerHTML = '<div class="success">Message has been send successfully!</div>';
    form.reset();
}

form.addEventListener("submit", submitForm);