// signup login page

let eyeicon = document.getElementById("hide-eye");
let eyeicon2 = document.getElementById("hide-eye-2");
const passInput = document.getElementById("password-input");
const password2 = document.getElementById("password2");
let options_link = document.getElementById("option-link");
let options_text = document.getElementById("option-text");
let title = document.getElementById("head-id");
const mailfield = document.getElementById("mail-id");
let forgetpass = document.getElementById("forget-id");
let button = document.getElementById("button-id");
const form = document.getElementById("form-id");
let nameInput = document.getElementById("username-input");
const emailInput = document.getElementById("email-input");
const userfield = document.getElementById("user-id");
const passfield = document.getElementById("password-id");
const passerrortext = document.getElementById("pass-error");
const confpassfield = document.getElementById("conf-pass-id");

eyeicon.onclick = function () {
  if (passInput.type == "password") {
    passInput.type = "text";
    eyeicon.classList.replace("fa-eye-slash", "fa-eye");
  } else {
    passInput.type = "password";
    eyeicon.classList.replace("fa-eye", "fa-eye-slash");
  }
};

function checkUsername() {
  if (nameInput.value.length == 0) {
    return userfield.classList.add("invalid");
  }
  userfield.classList.remove("invalid");
}

function checkPass() {
  if (passInput.value.length < 8) {
    passerrortext.innerHTML = "Password should be atleast 8 characters wrong";
    return passfield.classList.add("invalid");
  } else {
    const sp_char = new RegExp(/[^A-Za-z0-9]/);
    const num = new RegExp(/[0-9]/);
    if (!num.test(passInput.value)) {
      passerrortext.innerHTML = "Password must contain atleast one number";
      return passfield.classList.add("invalid");
    } else if (!sp_char.test(passInput.value)) {
      passerrortext.innerHTML = "Password must contain a special character";
      return passfield.classList.add("invalid");
    }
  }
  passfield.classList.remove("invalid");
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkUsername();
  checkPass();
});
