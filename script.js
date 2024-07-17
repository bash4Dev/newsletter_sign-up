const emailInput = document.getElementById("email");
const errorMsg = document.getElementById("error-msg");
// const formElement = document.getElementById("sub-form");

function addErrorMsg(msg) {
    errorMsg.style.display = "block";
    errorMsg.style.color = "#df1a1a"
    emailInput.style.border = "1px solid #df1a1a";
    errorMsg.innerText = msg;
}

function clearErrorMsg() {
    errorMsg.style.display = "none";
    errorMsg.innerText = "";
}

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function submitForm(e) {
    e.preventDefault();
    clearErrorMsg();

    const emailValue = emailInput.value;

    if (emailValue === "") {
        addErrorMsg("Email field is blank!");
    } else if (!validateEmail(emailValue)) {
        addErrorMsg("Please enter a valid email!");
    } else {
        return window.location.href = "./success-msg.html";
    }
}

// const dismissBtn = document.getElementById("dismiss-btn");
// dismissBtn.addEventListener("click", () => {
//     history.back();
// });
const btn = document.querySelector(".btn");
btn.addEventListener("click", submitForm);