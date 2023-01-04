const USERNAME = "username";
const HIDDEN = "hidden";

const body = document.querySelector("body");
const usernameDisplay = document.getElementById("username-display");
const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");

const rand = Math.ceil(Math.random() * 10);

body.style.background = `url(images/bg/${rand}.jpg)`;
body.style.backgroundRepeat = "no-repeat";
body.style.backgroundPosition = "100% 100%";

function paintUsername(username) {
  usernameDisplay.innerText = `${username}님, 환영합니다`;
}

function saveUsername(username) {
  localStorage.setItem(USERNAME, username);
}

function handleLoginFormSubmit(event) {
  event.preventDefault();
  const username = loginInput.value;
  saveUsername(username);
  loginForm.classList.add(HIDDEN);
  paintUsername(username);
}

const username = localStorage.getItem(USERNAME);

if (username !== null) {
  loginForm.classList.add(HIDDEN);
  paintUsername(username);
}

loginForm.addEventListener("submit", handleLoginFormSubmit);
