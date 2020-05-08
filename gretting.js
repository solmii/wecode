"use strict";

//HTML에서 사용한 class를 불러오는 함수
const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  greeting = document.querySelector(".js-greetings");

const USER_localStorage = "currentUser",
  SHOWING_className = "showing";

//사용자의 user name을 local storage에 저장한다. => 새로고침해도 이름이 나온다 짱!
function saveName(text) {
  localStorage.setItem(USER_localStorage, text);
}

//사용자가 submit 했을 때, 여러가지 event를 출력한다.
function handleSubmit(event) {
  event.preventDefault();
  const currentValue = input.value;
  paintGreeting(currentValue);
  saveName(currentValue);
}

//user name이 없을 경우, input을 통해 name을 받아서 저장한다.
function askForName() {
  form.classList.add(SHOWING_className);
  form.addEventListener("submit", handleSubmit);
}

//Hello! user name 형식으로 출력해준다.
function paintGreeting(text) {
  form.classList.remove(SHOWING_className);
  greeting.classList.add(SHOWING_className);
  greeting.innerText = `Hello! ${text}`;
}

//user name이 local storage에 저장되어 있으면 그대로 불러오고, 없으면 input을 통해 정보를 받는다.
function loadName() {
  const currentUser = localStorage.getItem(USER_localStorage);
  if (currentUser === null) {
    // user name이 없을 경우
    askForName();
  } else {
    //user 있을 경우
    paintGreeting(currentUser);
  }
}

function init() {
  loadName();
}

init();
