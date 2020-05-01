"use strict";

// HTML 화면에 접근이 가능해짐

//HTML에서 원하는 것을 JS로 불러온다.
const body = document.body,
  gameHint = document.querySelector(".js-hint"),
  gameForm = document.querySelector(".js-game"),
  gameInput = gameForm.querySelector("input"),
  gameButton = document.querySelector(".js-gameButtom");

// 1~9까지의 중복되지 않는 숫자 랜덤 생성
const numberList = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const correctNumber = [];

for (let i = 0; i < 4; i += 1) {
  const randomNumber = numberList.splice(
    Math.floor(Math.random() * numberList.length),
    1
  )[0];
  correctNumber.push(randomNumber);
}

// 정답 숫자 4개 미만/초과 입력시 안내창 출력

// 정답 체크

// 스트라이크 체크

// 볼 체크

// 아웃 체크

// 남은 기회 안내
