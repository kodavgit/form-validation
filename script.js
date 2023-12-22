const form = document.querySelector("#account-form");
const userInput = document.querySelector("#username");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const confirmPasswordInput = document.querySelector("#confirm-password");


form.addEventListener("submit", (event) => {
    event.preventDefault();

    validateForm();
});


function validateForm() {
    if(userInput.value.trim() == "") {
        setError(userInput, "Name can not be empty");
    }
}

function setError(element, errorMessage) {
    const parent = element.parentElement;
    parent.classList.add("error");

    const paragraph = parent.querySelector("p");
    paragraph.textContent = errorMessage;
}



