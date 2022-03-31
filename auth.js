var button = document.getElementById("submit");
var email = document.getElementById("inputUser");
var mailFormat = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
var pa = document.querySelector(".messsage");

function validateEmail() {

    if (email.value == "") {
        pa.innerHTML = (" frfg");
        alert("please enter your email,phone number or username")
    }
    else if (!mailFormat.test(email.value)) {
        pa.innerHTML = ("Enter you email,phone number or username")
        // return false;
    }
    else {
        alert(" Success ");
    }

}
button.addEventListener("click", validateEmail);