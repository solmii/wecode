"use strict";

//HTML에서 원하는 것을 JS로 불러온다.
const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";

//할일 목록을 Array로 저장 =>to do list가 많아질 수 있기 때문에
//to do를 생성했을때, toDos 목록에 Array 안에 모이게 됨.
let toDos = []; //let으로 선언한 이유:나중에 to do list를 삭제할때, toDos->cleanToDos로 교체(=수정)해줘야 하는데 const는 수정이 안되기 때문에

//완료된 to do list 삭제하기
function deleteToDo(event) {
  const btn = event.target;
  const li = btn.parentNode;
  toDoList.removeChild(li);
  const cleanToDos = toDos.filter(function (toDo) {
    //filter : Array의 모든 아이템들을 거쳐서 정해진 함수를 실행
    return toDo.id !== parseInt(li.id); //Array안에 있는 toDo.id를 거쳐서, 결과가 거짓인것만(li.id와 같지 않은것만) 다시 return
  }); //parseInt(li.id);를 입력한 이유 : toDo.id는 number, li.id는 srting이라서, 모든값이 항상 거짓이 되기 때문에 li.id를 number로 변환해줌
  toDos = cleanToDos; //toDos(오래전) -> cleanToDos(최근) 것으로 교체
  saveToDos(); //toDos를 cleanToDos로 바꾼 후에 변경사항을 저장한다.
}

//toDos에 저장된 정보를 가져와서 local storage에 저장한다.
function saveToDos() {
  //local storage에는 JavaScript데이터가 string 형태로만 저장된다. 하지만 우리의 데이터는 object type....
  //JSON.stringify를 사용하면, object를 string으로 바꿔준다!
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

//span, delete button을 li안에 넣고, li를 ul안에 넣는다.
function paintToDo(text) {
  //querySelector와 다르게, js에서 원하는걸 생성할 수 있다!
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const span = document.createElement("span");
  const newId = toDos.length + 1; //toDos 안에 있는 Element의 +1개 값이 출력된다.
  delBtn.innerText = "💖";
  delBtn.addEventListener("click", deleteToDo);
  span.innerText = text;
  //appendChild = ()안의 내용은 부모 요소에 넣는다!
  li.appendChild(delBtn);
  li.appendChild(span);
  toDoList.appendChild(li);
  li.id = newId;
  const toDoObject = {
    text: text,
    id: newId,
  };
  toDos.push(toDoObject); //push를 이용하여, toDos Array 안에 to do object를 넣을 수 있다
  saveToDos(); //반드시 toDos를 push 한 뒤에 save를 호출해야한다!(js는 위에서부터 읽기 때문에 push전에 save하면 아무것도 안들어온다...)
}

//
function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = "";
}

//to do list 안의 내용이 null이라면 아무 행동도 하지 않음. null이 아니라면 화면에 object 형태로 출력함
function loadToDos() {
  const loadedToDos = localStorage.getItem(TODOS_LS);
  if (loadedToDos !== null) {
    // console.log(loadedToDos)로 불러올수 있지만, 그렇게 되면 string으로 불러와진다.
    const parsedToDos = JSON.parse(loadedToDos); //JSON을 사용하면 string->object로 변환해준다.
    //forEach : Array에 담겨있는걸 하나씩 실행해주는 함수
    parsedToDos.forEach(function (toDo) {
      paintToDo(toDo.text);
    });
  }
}

//초기화
function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
}

init();
