const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (username.value === "") {
    document.getElementById("usernameError").style.visibility = "visible";
    document.getElementById("usernameError").innerHTML =
      "Username is requirerd";
    username.style.borderColor = "#e74c32";
  }
    else {
    username.style.borderColor = "#2ecc71";
    document.getElementById("usernameError").innerHTML = "";
  }
