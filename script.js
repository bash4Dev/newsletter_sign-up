const errorField = document.getElementById("error");
const emailInput = document.getElementById("email");

function addError() {
    emailInput.placeholder = "no value";
    errorField.innerText = "this isn't a valid email"
    emailInput.style.border = "1px solid red";
    errorField.style.color = "red";
}
function submitForm(e) {
    console.log(e, "e");
    e.preventDefault();

const emailInput = document.getElementById("email");
const emailValue = emailInput.value;


    const form = document.getElementById("sub-form");
    // const valid = form.checkValidity;
    // console.log("valid: ", valid);
    console.log(emailValue, emailValue == "", "boolean email");



    if (emailValue == "") {
        addError()
    } 
    // else {
       
    // }
}

emailInput.addEventListener("input", ()=>{
    const emailInput = document.getElementById("email");
    const emailValue = emailInput.value;

    if (!Boolean(emailValue)) {
        addError()
    } else {
        console.log("I have been changed");
        errorField.innerText = ""
    }


})


