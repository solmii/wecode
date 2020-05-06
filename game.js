"use strict";

//HTML에서 원하는 것을 JS로 불러오기
const gameHint = document.querySelector(".js-hint"),
  gameForm = document.querySelector(".js-game"),
  gameInput = gameForm.querySelector("input"),
  gameButton = document.querySelector(".js-gameButtom"),
  paintAnswer = document.querySelector(".js-answer"),
  remainChance = document.querySelector(".js-chance"),
  logList = document.querySelector(".logList");

// 야매로 데이터 출력..... 수정 필요함ㅠ
paintAnswer.textContent = "?";
remainChance.innerHTML = `남은 기회 : <span class="point">10</span>`;

// 1~9까지의 중복되지 않는 숫자 랜덤 생성
const numberList = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const answer = [];

console.log(answer);

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

gameForm.addEventListener("submit", function checkAnswer(event) {
  event.preventDefault();
  const guess = gameInput.value;
  const guessList = guess.split("").map(Number);

  if (guess === answer.join("")) {
    // 정답일 경우
    gameHint.textContent = "Homerun!!";
    paintAnswer.textContent = `${answer}`;
  } else {
    // 오답일 경우
    let strike = 0;
    let ball = 0;
    count += 1;

    // 남은 기회 안내
    let chance = 10 - count;
    remainChance.innerHTML = `남은 기회 : <span class="point">${chance}</span>`;

    if (count >= 10) {
      // 기회 10번 초과시 Game Over
      gameHint.textContent = `Game Over!!`;
      remainChance.innerHTML = `<span class="point">재시작</span> 버튼으로 다시 도전하세요!`;
      paintAnswer.textContent = `${answer}`;
    } else {
      for (let i = 0; i < 4; i += 1) {
        if (guessList[i] === answer[i]) {
          strike += 1; //스트라이크 체크
        } else if (answer.indexOf(guessList[i]) > -1) {
          ball += 1; //볼 체크
        }
      }
      gameHint.textContent = `${strike}S ${ball}B`;
      logList.innerHTML += `<li>${count}번째 도전 <span class="point">${guess}</span> : ${strike}S ${ball}B</li>`;
    }
  }
});

// 아웃 체크
