// function showLogin() {
//   document.getElementById("loginForm").classList.remove("hidden");
//   document.getElementById("signupForm").classList.add("hidden");
// }

// function showSignup() {
//   document.getElementById("signupForm").classList.remove("hidden");
//   document.getElementById("loginForm").classList.add("hidden");
// }


// let loginButton = document.querySelector("#loginButton");
// let signupButton = document.querySelector("#signupButton");


function showModal() {
    document.querySelector('.overlay').classList.add('showoverlay');
    document.querySelector('.loginform').classList.add('showloginform');
}

function closeModal() {
    document.querySelector('.overlay').classList.remove('showoverlay');
    document.querySelector('.loginform').classList.remove('showloginform');
}


let btnlogin = document.querySelector(".login_btn");
let closebtn = document.querySelector("span");

closebtn.addEventListener("click", closeModal);

btnlogin.addEventListener("click", showModal);