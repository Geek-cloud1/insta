var userName = document.getElementById("inputUser");
var userPassword = document.getElementById("inputPass");
var button = document.getElementById("submit");
var pa = document.getElementById("message");
var par = document.getElementById("error");


function validEmail () {
    if (userName.value.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) || 
    userName.value.match(/^(\+{0,})(\d{0,})([(]{1}\d{1,3}[)]{0,}){0,}(\s?\d+|\+\d{2,3}\s{1}\d+|\d+){1}[\s|-]?\d+([\s|-]?\d+){1,2}(\s){0,}$/gm)) {
        pa.innerHTML = (" ");
        return console.log(true);
    }
    else {
        pa.innerHTML = ("Please enter a valid email address, phone number, or username");
        pa.className = ("red");
    }
}
function emptyPass() {
    if (userPassword.value.length === 0 || userPassword.value.length < 4) {
        par.innerHTML = ("Enter a valid password");
        par.className = ("red");
    }
    else {
        par.innerHTML = (" ")
    }
}
// function signIn() {
//     if (validEmail() === true && emptyPass() === true) {
//         alert("logged in successfully!");
//     }
// }

button.addEventListener("click", validEmail);
button.addEventListener("click", emptyPass);
// button.addEventListener("click", signIn);