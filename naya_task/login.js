//Validtion Code For Inputs

var email = document.forms['form']['email'];
var password = document.forms['form']['password'];
window.onload = function () {
  var btnSubmit = document.getElementById('sub_btn');
  // disable submit
  btnSubmit.disable = true;
}
var email_error = document.getElementById('email_error');
var pass_error = document.getElementById('pass_error');
var submit = document.getElementById('sub_btn');

email.addEventListener('textInput', email_Verify);
password.addEventListener('textInput', pass_Verify);
submit.addEventListener('click', check_user);

var user_data = [
    {
        "id": "1",
        "firstName": "John",
        "lastName": "Doe",
        "email":"johndoe@g.com",
        "pass":"12345678",
        "prof_pic":"link"
    },
    {
        "id": "2",
        "firstName": "Mary",
        "lastName": "Peterson",
        "email":"maryp@g.com",
        "pass":"12345678",
        "prof_pic":"link"
    },
    {
        "id": "3",
        "firstName": "George",
        "lastName": "Hansen",
        "email":"geohan@g.com",
        "pass":"12345678",
        "prof_pic":"link"
    }
];

function validated(){
    if (email.value.length < 9) {
        email.style.border = "1px solid red";
        email_error.style.opacity = 1;
        email.focus();
        return false;
    }
    if (password.value.length < 6) {
        password.style.border = "1px solid red";
        pass_error.style.opacity = 1;
        password.focus();
        return false;
    }

}
function email_Verify(){
    if (email.value.length >= 8 ) {
        email.style.border = "1px solid silver";
        email_error.style.opacity = 0;
        return true;
    }
}
function pass_Verify(){
    if (password.value.length >= 5) {
        password.style.border = "1px solid silver";
        pass_error.style.opacity = 0;
        return true;
    }
}
var random = 0;
function check_user(){

    for (var index = 0; index < user_data.length; ++index) {
    var user = user_data[index];

    if(user.email == email.value){
        if(user.pass == password.value){
            window.location.href = "./menupage.html";
            alert("Successful Login!")
            break;
        }
        else{
            alert("Incorrect password!");
            break;
        }
    }
    else{
        alert("User does not exist!");
        break;
    }
}

}
/*
const form = document.getElementById('form');
form.addEventListener("change", () => {
    document.getElementById('sub_btn').disabled = !form.check_user()
});*/