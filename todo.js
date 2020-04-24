"use strict";

//HTML에서 원하는 것을 JS로 불러온다.
const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";

//span, delete button을 li안에 넣고, li를 ul안에 넣는다.
function paintToDo(text) {
  //querySelector와 다르게, js에서 원하는걸 생성할 수 있다!
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  delBtn.innerHTML = "❌";
  const span = document.createElement("span");
  span.innerText = text;
  //appendChild = ()안의 내용은 부모 요소에 넣는다!
  li.appendChild(delBtn);
  li.appendChild(span);
  toDoList.appendChild(li);
}

//
function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = "";
}

//to do list 안의 내용이 null이라면 아무 행동도 하지 않음. null이 아니라면
function loadToDos() {
  const toDos = localStorage.getItem(TODOS_LS);
  if (toDos !== null) {
  }
}

//초기화
function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
}

init();
