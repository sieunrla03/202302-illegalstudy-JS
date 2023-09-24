# 9장 타입 변환과 단축 평가
### 과제 9-1 암묵적 타입 변환이 무조건적으로 좋지 않은 문화이자 기능인가?
무조건적으로 좋지 않다고는 생각하지 않지만 사용하지 않는 쪽이 더 좋다고 생각한다. 
개발자의 의도와 관계없이 JS엔진에 의해 타입이 자동 변환되는 것은 어떠한 상황에서 혼란을 초래할 수도 있다고 생각한다.
특히 팀 협업인 경우에는 코드 관리에 예상치 못한 어려움을 줄 수 있다고 생각된다.

# 9장 단축 평가 (심화)
### 심화 과제 9-2 아래 설명에 따라 단축 평가를 이용하여 아래의 if문처럼 작동하는 true 값 여부를 판별하는 코드를 빈칸에 알맞게 작성해보시오. 결과도 지참.
```JS
var isThereMessage = true;
var message = '';

if(isThereMessage) message = '멘토는 죽어있다.';

message = isThereMessage || message;
console.log(message);
```
```JS
//실행결과
true
```

# 10장 객체 리터럴 
### 과제 10-1 아래의 코드를 실행해보시고 왜 결과 값이 그렇게 나오는지 생각해보세요
```JS
var person = { //person이라는 객체를 선언
firstName : 'turtle', //firstName의 프로퍼티 값을 turtle로 정의함
last-name : 'park' //lsat-name의 값을 park으로 정의함
};
console.log(person); //person이라는 하나의 객체를 불러오면, 해당 객체안에 구성된 프로퍼티의 키와 값이 출력됨
//실행결과 {firstName: 'turtle', last_name: 'park'}
//==============================================
var word1 = { //word1이라는 객체를 선언
var: '', //var의 프로퍼티 값을 ''로 정의함
function: '' //function의 프로퍼티 값을 ''로 정의함
};
console.log(word1); // word1이라는 하나의 객체를 불러오면, 해당 객체안에 구성된 프로퍼티의 키와 값이 출력
//실행결과 {var: '', function: ''}
//==============================================
//프로퍼티 키 동적 생성
var objES5 = {}
var keyES5 = 'ES5'
objES5[keyES5] = 'world'; // 프로퍼티 키를 동적 생성함
// 표현식을 사용하여 프로퍼티 키를 동적으로 생성할 경우 프로퍼티 키로 사용할 표현식을 대괄호로 묶어서 선언
console.log(objES5);
//실행결과 {ES5: 'world'}
//==============================================
//계산된 프로퍼티 이름
var keyES6 = 'HELL'; 
var objES6 = {[keyES6]: 'o'}; //프로퍼티 이름을 변수나 표현식으로 동적 생성을 할 수 있다. 따라서 keyES6의 값 HELL이 프로퍼티 키로 사용되고 o이 프로퍼티의 값이 된다.
console.log(objES6);
//실행결과 {HELL: 'o'}
//==============================================
var emptyObj = {
'' : '' //emptyobj객체 안에는 빈 문자열을 프로퍼티 키와 프로퍼티 값으로 할당함
};
console.log(emptyObj);
//실행결과 {"": ''}
//==============================================
var numObj = {
1 : 0,
2 : 1,
3 : 2
}; //numObj이라는 객체안에 1,2,3이라는 프로퍼티 키들에 각각 0, 1, 2라는 프로퍼티 값들을 정의함
console.log(numObj);
//실행결과 {1: 0, 2: 1, 3: 2}
//==============================================
var duplicateObj = {
name : 'park',
name : 'kim'
}; //dupicateobj 객체에 name 프로퍼티가 이미 존재하면 name 프로퍼티의 값은 갱신된다. 따라서 name:'kim'이 출
console.log(duplicateObj);
//실행결과 {name: 'kim'}
//==============================================
```

### 과제 10-2 브라우저 환경과 Node.js 환경을 준비하고 아래의 코드를 돌려봅니다.
```JS
var wind = {
  'last-name' : 'park',
  1: 10
};

wind.'last-name';
wind.last-name;

wind[last-name];
wind['last-name'];

wind.1;
wind.'1';
wind[1];
wind['1']
```
```JS
//실행결과 
Welcome to Node.js v18.16.0.
Type ".help" for more information.
> var wind = {
...   'last-name' : 'park',
...   1: 10
... };
undefined
>
> wind.'last-name';
wind.'last-name';
     ^^^^^^^^^^^

Uncaught SyntaxError: Unexpected string
> wind.last-name;
Uncaught ReferenceError: name is not defined
>
> wind[last-name];
Uncaught ReferenceError: last is not defined
> wind['last-name'];
'park'
>
> wind.1;
wind.1;
    ^^

Uncaught SyntaxError: Unexpected number
> wind.'1';
wind.'1';
     ^^^

Uncaught SyntaxError: Unexpected string
> wind[1];
10
> wind['1']
10
```
## 추가과제 반복문과 조건문 이용한 프로그램 짜기
for문을 이용한 별찍기 - 피라미드
```JS
//코드
let triangle = '';

for (let i = 0; i < 6; i++) {
    for (let j = 1; j < 6 - i; j++) {
        triangle += ' ';
    }
    for (let j = 0; j < 2 * (i + 1) - 1; j++) {
        triangle += '*';
    }
    triangle += '\n'
}
console.log(triangle);
```

## 단축평가에 대한 추가 과제
```JS
var answer = false;
var message = '';
if (answer) message = 'F'
message = false || 'F';
console.log(message);
//실행결과 F
```
