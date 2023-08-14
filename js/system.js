// sign up page
let userNameInput = document.getElementById("userNameInput");
let userEmailInput = document.getElementById("userEmailInput");
let userPasswordInput = document.getElementById("userPasswordInput");
let userInfo;

let signUpBtn = document.getElementById("signUpBtn");

let userNameAlert = document.getElementById("userNameAlert");
let userEmailAlert = document.getElementById("userEmailAlert");
let userPasswordAlert = document.getElementById("userPasswordAlert");
let tryAgainMsg = document.getElementById("tryAgainMsg");
let confirmMsg = document.getElementById("confirmMsg");
let signIn = document.getElementById("signIn");

let accountExistMsg = document.getElementById("accountExistMsg");

if (localStorage.getItem("users") == null) {
  userInfo = [];
} else {
  userInfo = JSON.parse(localStorage.getItem("users"));
}


function signUp(){
  isExist();
  validation();
  if (validation() == true && isExist() == false) {
    var user = {
      name: userNameInput.value,
      email: userEmailInput.value,
      password: userPasswordInput.value,
    };
    userInfo.push(user);
    localStorage.setItem("users", JSON.stringify(userInfo));
    confirmMsg.classList.replace("d-none", "d-block");
    signIn.classList.replace("d-none", "d-block");
  } else {
    tryAgainMsg.classList.replace("d-none", "d-block");
  }
}

function validateName() {
  var regexp = /^[A-Z][a-z]{3,14}/;
  if (regexp.test(userNameInput.value) == true && userNameInput.value != "") {
    userNameInput.classList.add("is-valid");
    userNameInput.classList.remove("is-invalid");
    userNameAlert.classList.replace("d-block", "d-none");
    return true;
  } else {
    userNameInput.classList.add("is-invalid");
    userNameInput.classList.remove("is-valid");
    userNameAlert.classList.replace("d-none", "d-block");
    return false;
  }
}

function validateEmail() {
  var regexp = /@[a-z{5,10}(\.com)$]/;
  if (regexp.test(userEmailInput.value) == true) {
    userEmailInput.classList.add("is-valid");
    userEmailInput.classList.remove("is-invalid");
    userEmailAlert.classList.replace("d-block", "d-none");
    return true;
  } else {
    userEmailInput.classList.add("is-invalid");
    userEmailInput.classList.remove("is-valid");
    userEmailAlert.classList.replace("d-none", "d-block");
    return false;
  }
}
function validatePassword() {
  var regexp = /.{5,15}$/;
  if (regexp.test(userEmailInput.value) == true) {
    userPasswordInput.classList.add("is-valid");
    userPasswordInput.classList.remove("is-invalid");
    userPasswordAlert.classList.replace("d-block", "d-none");
    return true;
  } else {
    userPasswordInput.classList.add("is-invalid");
    userPasswordInput.classList.remove("is-valid");
    userPasswordAlert.classList.replace("d-none", "d-block");
    return false;
  }
}

function validation() {
  validateName();
  validateEmail();
  validatePassword();
  if (
    validateName() == true &&
    validateEmail() == true &&
    validatePassword() == true
  ) {
    return true;
  } else {
    return false;
  }
}

function isExist() {
  for (i = 0; i < userInfo.length; i++) {
    if (
      userInfo[i].name.toLowerCase() == userNameInput.value.toLowerCase() ||
      userInfo[i].email.toLowerCase() == userEmailInput.value.toLowerCase()
    ) {
      userNameInput.classList.add("is-invalid");
      userEmailInput.classList.add("is-invalid");
      accountExistMsg.classList.replace("d-none", "d-block");
      return true;
    } else {
      return false;
    }
  }
}

var loginEmailInput = document.getElementById("loginEmail");
var loginPasswordInput = document.getElementById("loginPassword");
var loginBtn = document.getElementById("loginBtn");
var wrongMsg = document.getElementById("wrongMsg");
var fillMsg = document.getElementById("fillMsg");

function login() {
  if(loginEmailInput.value =="" || loginPasswordInput.value == ""){
    fillMsg.classList.replace("d-none", "d-block");
    return false;
  }else{
    for (i = 0; i < userInfo.length; i++) {
      if (
        userInfo[i].email.toLowerCase() == loginEmailInput.value.toLowerCase() &&
        userInfo[i].password.toLowerCase() == loginPasswordInput.value.toLowerCase()
      ) {
        localStorage.setItem("userName", userInfo[i].name);
        loginBtn.setAttribute("href", "welcome.html");
      }
      else{
        wrongMsg.classList.replace("d-none", "d-block")
      }
    }
  }

}

var userName = localStorage.getItem("userName");
var messageHello = document.getElementById("messageHello")
function displayHello(){
  messageHello.innerHTML = "welcome " + userName
}