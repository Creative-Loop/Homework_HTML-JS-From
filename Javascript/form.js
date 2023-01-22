var firstName = document.getElementById("firstName");
var lastName = document.getElementById("lastName");

var email = document.getElementById("email");
var phone = document.getElementById("phone");


function Validation() {


    var letters = /^[A-Za-z]+$/;
    var mailformat = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;
    if (firstName.value.match(letters) && email.value.match(mailformat) && phone.length <=11) {
        return true;
    }
    else {
        alert("The fields you entered is invalid");
        return false;
    }

    
}
window.location.href("calculator.html");
