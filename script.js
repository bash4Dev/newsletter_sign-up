const emailInput = document.getElementById("email");
const errorMsg = document.getElementById("error-msg");
const emailValue = document.getElementById("email").value;


function addErrorMsg() {
    // errorMsg.innerText = "Please enter your email!";
    errorMsg.style.color = "#df1a1a";
    emailInput.style.border = "1px solid #df1a1a";
}

function submitForm(e) {
    e.preventDefault();

    const formElement = emailInput.value;
    const validInput = formElement.checkValidity();

    if (validInput) {
        window.location.href("./successMsg.html")
    } else {
        if (emailValue === "") {
            addErrorMsg();
            errorMsg.innerText = "Email field must be filled!";
        } else {
            addErrorMsg();
            errorMsg.innerText = "Please enter a valid email!";
        }
    }
}

emailInput.addEventListener("input", submitForm);