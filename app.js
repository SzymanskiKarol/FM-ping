function validateEmail() {
    var email = document.forms["myForm"]["email"].value;
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var errorInfo = document.querySelector(".error");
    email.match(mailformat) ? errorInfo.classList.remove("active") : errorInfo.classList.add("active");
}