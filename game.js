"use strict";

//HTML에서 원하는 것을 JS로 불러오기
const gameHint = document.querySelector(".js-hint"),
  gameForm = document.querySelector(".js-game"),
  gameInput = gameForm.querySelector("input"),
  gameButton = document.querySelector(".js-gameButtom"),
  logList = document.querySelector(".logList");

// 1~9까지의 중복되지 않는 숫자 랜덤 생성
const numberList = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const answer = [];

while (answer.length < 4) {
  const randomNumber = numberList.splice(
    Math.floor(Math.random() * numberList.length),
    1
  )[0];
  answer.push(randomNumber);
}

// 중복 체크

// 정답 체크
let count = 0;

gameForm.addEventListener("submit", function (event) {
  // 도전! 버튼을 클릭했을때, 비동기 함수 실행
  event.preventDefault();
  const guess = gameInput.value;

  if (guess === answer) {
    // 정답일 경우
    gameHint.textContent = "Homerun!!";
  } else {
    // 오답일 경우
    const guessList = guess.split("");
    let strike = 0;
    let ball = 0;
    count += 1;
    if (count > 10) {
      // 기회 10번 초과시 Game Over
      gameHint.textContent = `Gmae Over!! 정답은 ${answer}!`;
    } else {
      for (let i = 0; i < 3; i += 1) {
        if (Number(guessList[i]) === answer[i]) {
          //스트라이크 체크
          strike += 1;
        } else if (answer.indexOf(Number(guessList[i])) > -1) {
          //볼 체크
          ball += 1;
        }
      }
      gameHint.textContent = `${strike}S ${ball}B`;
      gameInput.value = "";
    }
  }
});

// 시도 횟수와 스트라이크, 볼 log 출력

// 아웃 체크

// 남은 기회 안내
