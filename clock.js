"use strict";

// HTML에서 작성한 시계 class를 가져온다.
const clockContainer = document.querySelector(".js-clock"),
  clockTitle = clockContainer.querySelector(".js-title");

// getTime이라는 실제 시간을 가져오는 변수를 만들고, HTML에서 가져온 title에 시간:분:초 형식으로 출력한다.
// 하지만 시계가 자동으로 업데이트 되지 않고, 새로고침 해야만 반영되지만, 아래에서 setInterval를 사용해서 자동으로 불러온다.
function getTime() {
  const date = new Date();
  const minutes = date.getMinutes();
  const hours = date.getHours();
  const seconds = date.getSeconds();
  //시간:분:초 형식으로 출력하기 + mini if를 사용해서 1초를 01초로 표현!
  clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }:${seconds < 10 ? `0${seconds}` : seconds}`;
}

//초기화 + 매 초마다 시간 불러오기
function init() {
  getTime();
  setInterval(getTime, 1000); //1000으로 설정하면 1초마다 불러오게 된다. (1 = millisecond)
}

init();
