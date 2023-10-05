# 12장 함수
### 과제 12-1 아래의 빈칸과 서로 차이점을 서술하시오.
```JS
function add(x, y) { // x,y 을 뭐라하는가? : parameter(매개변수)
    return x + y;
}
add(2,5); // 들어가는 값에 대한 단어 : Argument(인수)
```
+ Parameter : 함수를 정의할 때 사용되는 변수
+ Argument : 실제로 함수가 호출될 때, 넘기는 변수값을 의미
### 과제 12-2 본인이 생각하기에 이상적인 개발자는 어떤 형태인가?
계속해서 쏟아져나오는 정보들에 거부감 없이 공부하고 그에 흥미를 느끼며 개발에 적용해나가는 사람. 기술적인 측면에서도 뛰어나야겠지만 타인과 원활한 커뮤니케이션도 가능한 사람.


### 과제 12-3 선언문에서는 함수 이름을 생략할 수 없다. 만약 함수 이름을 생략하면 나오는 에러는 어떤건지 확인해보세요
```JS
function (x,y){
    return x+y
}
console.log(2,5)
```
```JS
//실행결과
function(x, y) {
^^^^^^^^

SyntaxError: Function statements require a function name

```
### 과제 12-4 {}는 블록문일까 객체 리터럴일까? 본인의 생각을 쓰고 그 이유에 대해서 서술하시오.
어떤 상황에서 쓰이냐에 따라 두 가지가 각각 표기된다고 생각한다. 조건문, 반복문 등의 경우 {}는 블록문으로 사용되고, 선언한 변수에 값을 할당하는 경우 등..에서는 객체 리터럴이다. 차이점으로는 블록문의 경우에는 {}으로 사용되고 객체리터럴은 {}뒤에 ;가 붙어 {};의 형태로 사용된다.

### 과제 12-5 하단의 에러는 왜 날까?
```JS
var add1 = (function() {
  var a = 10;
  return function (x, y){

    return x + y + a;
  };

}());

console.log(add1(1,2)); // 13

var add2 = (function() {
  var a = 10;
  return new Function('x', 'y', 'return x + y + a;')

}());
console.log(add2(1,2)); // ReferenceError: a is not defined
```
new Function 함수가 실행됨에있어서 a가 함수 내부에 정의되어 있지 않기 때문이다.
### 과제 12-6 아래 함수를 실행해보고 결과 값을 적으세요.
```JS
function add(x, y){
  console.log(x,y);
  return x+y;
}
add(2, 5);

console.log(x, y);

/*실행결과
console.log(x, y);
            ^

ReferenceError: x is not defined
*/
```
```JS
function add(x, y) {
  return x + y;
}
console.log(add(2));
/* 실행결과
NaN
*/
```
```JS
function add(x, y) {
  console.log(arguments);
  return x + y;
}

console.log(add(2,5,10));
/*실행결과
[Arguments] { '0': 2, '1': 5, '2': 10 }
7
*/
```
### 과제 12-7 Call by Reference, call by value를 공부하세요.
call by value와 call by reference란 변수나 객체등이 함수의 argument로 들어와 매개변수(parameter)로 전달될 때 어떤 방식으로 전달될 지를 결정하는 방식이다. 함수 호출 방법은 크게 2가지로 call by value : 값에 의한 호출, 값의 복사 / call by reference : 참조에 의한 호출, 주소의 복사 가 있다. 
call by value값에 의한 호출, 값의 복사는 복사된 값을 인자로 넘겨서 매개변수로 전달한다.
call by reference참조에 의한 호출, 주소의 복사는 실제 데이터가 존재하는 주소를 가리키는 주소값을 인자로 넘겨서 매개변수로 전달한다. 
### 과제 12-8 재귀함수로 팩토리얼을 구현해보시오. 그리고 해당 코드에 대한 리뷰를 해보세요.
```JS
function factorial(a) {
    if (a <= 1) return 1; //factorial이 계속 돌아가는 것을 막기 위함.a가 1 이하일 때 1리턴
    return a * factorial(a - 1);
};
console.log(factorial(4));
//실행결과 24
```
### 과제 12-9 callback 지옥이라는 말이 유명하다. 직접 지옥을 만들어보자. 그리고 callback 지옥이 왜 위험한지 서술하시오.
```JS
function increase(num, callback) {
    setTimeout(() => {
        const result = num + 10;
        if (callback) {
            callback(result);
        }
    }, 1000)
}
console.log('start')
increase(0, result => {
    console.log(result);
    increase(result, result => {
        console.log(result);
        increase(result, result => {
            console.log(result);
            console.log('end');
        })
    })

})
```
가독성을 저하시키고 복잡한 비동기 흐름을 파악하기 어려워지고 코드가 길어진다. 이렇게되면 에러를 찾고 수정하기가 어려워진다. 오류가 발생할 경우 어느 단계에서 오류가 발생했는지 파악하기 어렵다. 그리고 각 단계마다 콜백 함수를 중복으로 작성해야 하므로 코드의 재사용성이 저하된다.
### 과제 12-10 아래의 코드 중 어떤 것이 순수 함수이며 어떤 것이 비순수 함수인지 서술하세요.
```JS
var count = 0;
function increase(n) {
  return ++n;
}
count = increase(count);
console.log(count);

count = increase(count);
console.log(count);
//실행결과 
//1
//2
```
위 코드는 외부 상태에 의존하지 않고 매개변수를 통해 함수 내부로 전달된 인수에만 의존해서 값을 생산하므로 순수함수이다.
```JS
var count = 0;
function increase() {
  return ++count;
}
count = increase(count);
console.log(count);

count = increase(count);
console.log(count);
//실행결과 
//1
//2
```
위 코드는 외부상태에 의존을 한다. 외부 상태 count의 상태에 따라 반환값이 달라지는 함수이기 때문에 비순수함수이다.
### 추가과제1 commonJS와 ES6 차이점 찾아오기
ES6는 reac에서 모듈을 불러오기 위한 import, export를 포함한다. commonJS는 Node.js에서 모듈을 불러오기 위해 requie, export 키워드를 포함한다. 
구조의 차이저을 코드에서 알아보자면 이렇다.
```JS
const name = require('./module.js'); //commonJS
import name from './module.js' // ES6
```
+ require()는 파일에 들어있는 곳에 남아 있으며 import()는 항상 맨 위로 이동한다.
+ require()는 프로그램의 어느 지점에서나 호출 할 수 있지만 import()는 파일의 시작 부분에서만 실행할 수 있다.
+ 하나의 프로그램에서 두 키워드를 사용할 수는 없다.
https://inpa.tistory.com/entry/NODE-%F0%9F%93%9A-require-%E2%9A%94%EF%B8%8F-import-CommonJs%EC%99%80-ES6-%EC%B0%A8%EC%9D%B4-1

### 추가과제2 콜백지옥을 해결하기 위한 예방법/대책법 찾아오기
Promise
+ 자바스크립트에서 제공하는 비동기를 간편하게 처리하도록 도와주는 object객체 이다.
+ promise는 언젠가 완료가 되는 작업의 결과값을 담는 상자와 같은 역할을 한다.
+ promise 기반 비동기적 함수를 호출하면 그 함수는  promise 인스턴스를 반환한다. 
+ 콜백지옥을 해결하기 위한 promise는 다음 중 하나의 상태를 가진다.
  + 대기 pending : 이행하지도 거부하지도 않는 초기 상태
  + 이행 fulfill : 연산성공
  + 거부 reject : 연산실패
+ ES6에서 이용가능하다.

https://velog.io/@yangareum1818/JS-%EB%B9%84%EB%8F%99%EA%B8%B0-%EC%B2%98%EB%A6%AC-%EB%AA%A8%EB%93%A0-%EA%B2%83-%EC%BD%9C%EB%B0%B1%EC%A7%80%EC%98%A5%EC%9D%84-%ED%95%B4%EA%B2%B0%ED%95%98%EB%8A%94-%EB%B0%A9%EB%B2%95

promise + async/await
+ ES2017에서 추가 된 async/await문법을 이용한 방법이다.
+ promise로 비동기 처리를 하더라고 콜백 지옥이 연상되는 것을 알 수 있다.(then안에 promise안에  then 안애 .....)
+ 비동기 작업을 수행하고자 하는 함수 앞에 async를 표기하고, 함수 내부에서 실질적인 비동기 작업이 필요한 위치마다 await을 표기하는 것만으로 뒤의 내용을 promise로 자동 전환하고 해당 내용이 resolve된 이후에야 다음으로 진행된다.


### 추가과제3 function 사용해서 120줄 이상, 콜백함수, 재귀함수 들어가야함. 화살표 생성방식 사용(몇개는 return값을 주고 몇개는 return값을 주지 않음)
```JS
function one(callback) {
    setTimeout(function() {
        console.log("즐거운")
        callback();
    }, 1000);
}

function two(callback) {
    setTimeout(function() {
        console.log("자바")
        callback();
    }, 1000);
}

function three(callback) {
    setTimeout(function() {
        console.log("스크립트")
        callback();
    }, 1000);
}

function four(callback) {
    setTimeout(function() {
        console.log("너무")
        callback();
    }, 2000);
}

function five(callback) {
    setTimeout(function() {
        console.log("재밌다^~^")
        callback();
    }, 2000);
}
consolelog("Start!!");
one(function() {
    two(function() {
        three(function() {
            four(function() {
                five(function() {
                    console.log("end");
                });
            });
        });
    });
});
//-------------------------------------------
///펙토리얼
function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
};
console.log(factorial(10))
///피보나치 ----------------------------------
function fibo(n) {
    if (n <= 1) return 1;
    return fibo(n - 1) + fibo(n - 2);
};
console.log(fibo(20))
///피라미드----------------------------------
function triangle(n) {
    let Z = '';
    for (let i = 0; i < n; i++) {
        for (let j = 1; j < n - i; j++) {
            Z += ' ';
        }
        for (let j = 0; j < 2 * (i + 1) - 1; j++) {
            Z += '*';
        }
        Z += '\n'
    }
    console.log(Z);
}
triangle(6);
///사칙연산 계산기----------------------------------
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calculate() {
    console.log("사칙연산을 선택 하세요.");
    console.log("1. 더하기");
    console.log("2. 빼기");
    console.log("3. 곱하기");
    console.log("4. 나누기");

    rl.question("선택 하세요(1/2/3/4): ", (op) => {
        if (['1', '2', '3', '4'].includes(op)) {
            rl.question("첫번째 숫자: ", (num1) => {
                rl.question("두번째 숫자: ", (num2) => {
                    num1 = parseInt(num1); //입력받은 숫자 정수로 변환
                    num2 = parseInt(num2); //  ''

                    let result;
                    switch (op) {
                        case '1':
                            result = num1 + num2;
                            break;
                        case '2':
                            result = num1 - num2;
                            break;
                        case '3':
                            result = num1 * num2;
                            break;
                        case '4':
                            if (num2 === 0) {
                                console.log("0으로 나눌 수 없습니다.");
                                rl.close();
                                return;
                            }
                            result = num1 / num2;
                            break;
                    }

                    console.log(`${num1} ${op === '1' ? '+' : op === '2' ? '-' : op === '3' ? '*' : '/'} ${num2} = ${result}`);
                    rl.question("계속 하시겠습니까? (y/n): ", (answer) => { // rl.question()사용하여 사용자에게 계속할 지 여부를 묻는 코드
                        if (answer.toLowerCase() === 'y') { //대소문자 관련 없이 답변 처리
                            calculate();
                        } else {
                            rl.close();
                        }
                    });
                });
            });
        } else {
            console.log("X");
            rl.close();
        }
    });
}

calculate();
```