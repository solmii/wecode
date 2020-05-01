# Wecode 사전스터디 과제 - 자기소개 페이지

WeCode 9기 사전스터디 과제로 진행된 자기소개 페이지 입니다.

## 1. 자기소개 페이지

HTML, CSS를 이용해 자기소개 페이지를 만들어보았습니다.

### 소개

---

### 구현 기능

---

<br/><br/><br/>

## 2. To Do List

Vanilla JavaScript로 만든 To Do List입니다.<br /><br/>

### 소개

---

### 구현 기능

---

<br/><br/><br/>

## 숫자 야구 게임

Vanilla JavaScript로 만든 숫자 야구 게임입니다.<br /><br/>

### 소개

---

숫자 야구는 [Bulls and Cows](https://en.wikipedia.org/wiki/Bulls_and_Cows) 라고도 불리며, 오래된 컴퓨터 게임입니다. 내기삼아 할 수 있는 게임이자, 초보 프로그래머들이 예제로 많이 제작하는 프로그램이기도 합니다.<br /><br />

### 게임 방식

---

출제자는 **4자리 수의 숫자**를 생각하고, 정답자는 그 숫자를 **10번의 기회** 안에 맞춰야 합니다.<br />
JS로 만드는 숫자 야구 게임에서는 컴퓨터가 출제자가 됩니다.<br />
출제자는 정답자가 답을 맞추려는 시도를 할 때 마다 힌트를 주어야 합니다.<br />
게임 이름이 숫자 야구인 이유는 힌트를 주는 형식 때문입니다.<br /><br />

- 사용되는 숫자는 **1에서 9까지의 중복되지 않는 숫자**입니다.<br />
- 숫자는 맞지만 위치가 틀렸을 때는 볼 (이하 B)<br />
- 숫자와 위치가 전부 맞으면 스트라이크 (이하 S)<br />
- 숫자와 위치가 전부 틀리면 아웃<br />
- 물론 무엇이 B이고 S인지는 알려주지 않습니다.<br />
- 3회 이상 아웃이거나, 10번의 정답 기회동안 4S가 나오지 않으면 패배합니다.<br />
- 10번의 정답 기회 안에 4S가 나오면 승리합니다.<br /><br />

예를 들어보겠습니다.<br />
출제자가 임의의 4자리 숫자를 생각했고 이제 정답자가 정답을 외칩니다.<br /><br />
정답자 : 2469 (1S, 1B)<br />
정답자 : 2714 (2S, 1B)<br />
정답자 : 2476 (1S, 2B)<br /><br />
이 경우, 남은 경우의 수는 2743, 2745, 2748 3개 뿐입니다.<br />
이 정답자는 10번의 기회 안에는 정답을 말하겠군요.<br /><br />

### 구현(하고 싶은) 기능

---

- [x] 1~9까지의 서로 다른 숫자를 랜덤하게 추출해서 정답으로 지정
- [ ] 정답자가 입력한 숫자에 중복이 있으면 "중복되지 않는 네 자리 숫자를 입력해주세요." 출력하고 횟수 차감 하지말기
- [x] 스트라이크(S)를 체크하여 힌트로 출력
- [x] 볼(B)을 체크하여 힌트로 출력
- [ ] 아웃(OUT)을 체크하여 힌트로 출력
- [ ] 힌트랑 시도했던 정답은 사라지지 않고, 게임이 끝날때까지 계속 보일 수 있게 => input 창 아래에 log가 계속 남아있도록 추가하기
- [x] ~~정답자가 제출한 숫자가 4자리인지 체크하고, 4자리 숫자가 아니라면 "4자리 숫자로 입력해주세요." 라는 경고 메세지 출력~~ => html에서 max,min length를 이용해 구현했음
- [ ] 아웃이 3회 이상 나오면 Game Over!
- [ ] 사이드바에 남은 기회가 적혀있고, 정답을 입력할때 마다 기회가 1번씩 줄어듬
- [x] 정답 기회 10번 안에 4S가 나오지 않으면 Game Over!! + 정답 알려주기
- [x] 정답 기회 10번 안에 4S가 나오면 Game Homerun!!
- [x] 재시작 버튼 => 클릭하면 페이지 새로고침
- [ ] Homerun : "Homerun! 정답 기회 n번 만에 맞추셨군요! 게임을 다시 하고 싶으시면 재시작 버튼을 눌러주세요" 메세지 출력
- [ ] Gmae Over : "Game Over! 거의 다 왔는데 정말 아깝네요! 게임을 다시 하고 싶으시면 재시작 버튼을 눌러주세요" 메세지 출력<br /><br />

### bugfix

---

- [ ] 아무 숫자도 입력 안하고 도전 버튼 클릭했을때도 횟수 차감되고 0S 0B가 뜬다.
      => 횟수 차감 하지 말고 숫자를 입력해주세요! 안내창 뜨게 하기
- [ ] Game Over 됐을때 정답 입력하면 정답으로 인정됨 => 그냥 아예 도전버튼을 없애버릴까?

#### 랜덤 숫자 뽑기 thinking 1

1. 1~9까지 들어있는 numberList [] 을 만들고, 거기서 하나씩 뽑는다.
2. `splice` 메소드를 사용 (숫자를 하나 뽑을때마다, numberList 배열에서 해당 숫자가 사라지니까 따로 중복 체크를 하지 않아도 중복이 생기지 않는다.)
3. 숫자가 4개가 되기 전까지 반복해서 딱 4개의 숫자만 뽑는다. => for문을 사용해서 (i = 0; i < 4; i++) 하면 되지 않을까?
4. 중복 숫자가 생길 수 없으니 편할 것 같은데? `splice` 같은 메소드나 조건문은 깊게 공부하지 못하게 구현할 수 있을지 모르겠다....

#### 랜덤 숫자 뽑기 thinking 2

1. (Math.random() \* 10) 으로 0~10 미만 랜덤 소수값을 뽑는다.
2. parseInt 로 정수로 변환한다.<br />
3. 1~9 까지만 필요하니까 뽑은 숫자가 === 0일 경우 지우고 다시 뽑는 함수 추가
4. 이걸 for문으로 숫자 4개가 될때까지 반복
5. 중복 체크<br />
   =>중복 체크는 어떻게 해야 할까? 기존에 뽑은 숫자랑 비교?? 구글링 필요함

=> thinking 1이 따로 중복 체크를 안해도 되니 편할것 같다. 근데 아직 배열이나 메소드는 잘 모름.....ㅠㅠ 그래도 1로 도전!!!!

---

#### 스트라이크, 볼 체크 thinking 1

1. 출제자가 뽑은 정답 배열(이하 정답1)이랑 정답자가 입력한 정답 배열(정답2)을 각각 만든다.<br />스트라이크랑 볼은...변수로 지정?
2. 랜덤으로 정해진 숫자 4개가 정답1 배열에 들어가겠지
3. 스트라이크 체크는 정답2 배열이랑 정답1 배열을 비교한다. 이건 그냥 배열 위치별로 === 하면 될듯<br />
   일치하면 1S, 2S... nS 형식으로 출력
4. 볼 체크는... 볼 배열이랑 정답 배열 비교해야 하는데.... 위치는 다르고 숫자는 같아야 하는데 아 어렵당<br/>
   4-1. &&를 사용해서 정답2가 정답1이랑 일치하면서 + 스트라이크와 일치하지 않은 값만 뽑을까?<br />
   4-2. 정답1이랑 정답2만 비교해도 될것 같다. 예를들어 정답1의 (0)번째 === 정답2의 (1),(2),(3) 끼리만 비교, 정답1의 (1)도 마찬가지...오마이갓..... 음... 이걸 한줄로 줄여서 쓸 수 있지 않을까? 구글링 필요<br />
   4-3. 좋은 방법 생각남! 스트라이크 먼저 체크 한 후에 else if 로 정답1 배열 안에 정답2 요소가 일치하는지 비교 => 숫자도 같고 위치도 같은건 스트라이크 체크때 이미 걸러지니까 이렇게 나온 값은 자동적으로 볼이 됨.
