# 5장 표현식과 문
### 과제 5 아래의 코드에서 표현식인 부분과 표현식이 아닌 부분에 대해서 구분하시오.
```JS
var x;
x=100; //표현식
//*
-----------------------------
*/
var a = y = 100;
console.log(a); //표현식
//*
-----------------------------
*/
var foo = var x; //표현식X, 에러가 발생
```
# 6장 데이터 타입
### 과제 6-1 다 실수로 측정한다면 2진수, 8진수, 16진수를 출력하면 어떤식으로 될까?
```JS
var binary = 0b01000001;
var octal = 0o101;
var hex = 0x41;

console.log(binary,octal,hex);

if(binary === hex) console.log(true);
if(binary === octal) console.log(true);
```
```JS
//실행결과
65 65 65
true
true
```
### 과제 6-2 다 실수라면 아래의 비교문의 결과는 어떻게 나올까?
```Js
console.log(1 === 1.0);
console.log(4 / 2);
console.log(3 / 2)
```
```JS
//실행결과
true
2
1.5
```
### 과제 6-3 infinity, -infinity, NaN(Not A Number) 위 세가지를 console을 이용하여 도출해보세요.
```JS
console.log(Infinity);
console.log(-Infinity);
console.log(NaN);
```
```JS
Infinity
-Infinity
NaN
```
### 과제 6-4 만약 NaN이 아닌 nan, NAN 같이 변수에 대입하면 어떤 식으로 나올까요?
```JS
console.log(nan);
```
nan은 정의되지 않았다는 메시지와 함께 에러가 발생한다.
### 과제 6-5 "" 안의 ''(single quote)은 뭘로 인식되고 ''(single quote)안의 ""은 뭘로 인식될까?
```JS
var a = "이거랑'이거랑'";
var b = '꽃게랑"꽃게랑"';

console.log(typeof a);
console.log(typeof b);

//결과값만 도출하면
console.log(a)
console.log(b)
```
```JS
string
string
//결과값만 도출하면
이거랑'이거랑'
꽃게랑"꽃게랑"
```
### 과제 6-6 그렇다면 아래의 코드는 어떤식으로 다를까?
```JS
console.log(`a + b = ${1 + 2}`);
console.log('a + b = ${1 + 2}');
```
```JS
//실행결과
a + b = 3
a + b = ${1 + 2}
```
+ ''(single quote) ``(백틱) 모두 string 형태이다. 그러나 백틱을 사용한 첫번째 줄 코드는 ${1+2}가 계산되어서 a + b + 3이 출력되는 반면 ''(single quote)는 정말 그대로 string 형태로 출력됨.
### 과제 6-7 의도적 부재는 왜 사용할까?
+ 변수가 이전에 참조하던 값을 더 이상 참조하지 않겠다는 의미인데 이 때 자바스크립트 엔진은 누구도 참조하지 않는 메모리 공간에 대해 가비지 컬렉션을 수행한다. 이 때문에 값을 지정해주어야하는데 무슨 값을 넣어야할 지 고민될 때 의도적 부재를 사용할 수 있다.
### 과제 6-8 과연 아래의 사용법이 옳은 선택일까? 다른 방법으로 변수를 소멸시키는게 좋지 않을까?
```JS
var night = 'Turtle';
// 밑의 선언으로 인해 night는 더이상 터틀이라는 값을 참조하지 않으며 언젠가 gc에 없어져버린다.
night = null;
```
+ string 타입으로 지정된 값을 null을 이용하여 값을 제거하는 방식으로 위의 사용법이 옳은 방법이라 생각한다.
### 과제 6-9 ECMAScript 사양은 문자열과 숫자 타입 외에는 명시적으로 규정하고 있지 않은데 그렇다면 해당 데이터 타입들은 외에는 어떤식으로 계산되고 있는가?
+


### 과제 6-10 심벌 테이블 이라는 뜻을 알아보시오.
+ 컴파일러 또는 인터프리터와 같은 변환기에서 사용되는 데이터 구조
+ 일반적으로 해시 테이블을 사용해서 구현
+ 심볼 테이블은 어휘 분석기부터 최적화까지컴파일러의 대부분의 단계에서 접근됨
+ 심벌 테이블은 상호 작용하는 디버깅 세션 동안 같이 오직 변환 과정에서만 존재하거나, 프로그램의 실행 동안이나 이후에 진단 리포트를 포맷화하기 위한 리소스같이 추후 사용을 위한 과정의 결과에 삽입될 수 있음
### 과제 6-11 대표적인 동적/정적 언어를 조사해보시오
+ 동적 언어 : 자바스크립트, Ruby, 파이썬, 등
+ 정적 언어 : C, C++. C#, Java 등
# 7장 연산자
### 과제 7-1 아래의 코드를 실행하시면 됩니다.
```JS
var a = '1';
console.log(+a, typeof +a);
console.log(a, typeof a);
a = true;
console.log(+a, typeof +a);
console.log(a, typeof a);
a = false;
console.log(+a, typeof +a);
console.log(a, typeof a);
a = 'Hi';
console.log(+a, typeof +a);
console.log(a, typeof a);
```
```JS
//실행 결과
1 'number'
1 string
1 'number'
true 'boolean'
0 'number'
false 'boolean'
NaN 'number'
Hi string
```
### 과제 7-2 암묵적 타입 변환 또는 타입 강제 변환에 대해서 알아보시오.
+ 예상치 못한 타입을 받았을 때 예상 가능한 타입으로 바꿔준다고 생각하면 됨
+ 동적 타입 언어인 자바스크립트는 개발자의 의도와는 상관없이 자바스크립트 엔진에 의해 암묵적으로 타입이 자동 변환되기도 함
+ 자바스크립트 엔진은 표현식을 평가할 때 문맥, 즉 context에 고려하여 암묵적 타입 변환을 실행
+ 예로 사용자는 숫자 값을 넘겨야 하는 곳에 문자열을 넣을 수도 있고 문자열을 넣아야 하는 곳에 객체를 넘길 수도 있음. 이런 일이 발생할 때 자바스크립트 엔진은 사용자가 잘못 넣은 타입을 올바른 타입을 변환하려 시도함.
### 과제 7-3 아래의 비교가 뭐가 다른지 알아보시오.
```JS
5 == 5; //두 값이 같으므로 true
5 == '5'; //JS는 자동으로 형태를 변환하여 비교함 따라서  true
// ================================================
5 === 5; // 값과 타입 모두 동일하므로 true
5 === '5'; // 값은 같지만 타입이 다르기 때문에 false
// ================================================
'0' == ''; //문자열 0과 빈 문자열은 다르므로 false
0 == ''; //JS에서 숫자 0과 빈 문자열은 동등하게 취급하므로 true
0 == '0'; //문자열 0과 숫자 0은 동등하게 취급하므로 true
// ================================================
false == 'false'; // false와 문자열 false는 값이 다르므로 false
false == '0'; // false와 문자열 0은 동등한 취급을 하므로 true
false == null; //false와 null은 값이 다르므로 false
false == undefined; //false와 undefined는 값이 다르므로 false
// ---
NaN === NaN //NaN은 자신과 일치하지 않는 유일한 값이므로 false
0 == -0 //동등 연산자로써 값이 같으므로 true
0 === -0 //일치연산자로써 값과 타입이 같으므로 true
```

### 과제 7-4
```JS
 - 0 === 0 ; //true
Object.is(-0,0) //false
NaN === NaN; //false
Object.is(NaN,NaN);//true
```
의 결과가 왜 다를까?
=== 일치 비교 연산자는 값과 타입이 모두 같은지를 판별한다. object.js 메서드는 예측 가능한 정확한 비교 결과를 반환한다.
### 과제 7-5 위에 있는 반환 값을 다 나타내보시오.
```JS
typeof 1 //number
typeof 'apple' //string
typeof true //boolean
typeof undefined //undefined
typeof Symbol() //symbol
typeof null //object
typeof function() {} //function
```
### 추가과제 백준, 프로그래머스 등등 뭐든 알고리즘 문제를 자바스크립트를 이용해서 풀어오세요.
<img width="1272" alt="image" src="https://github.com/sieunrla03/202302-illegalstudy-JS/assets/106252274/e2f70ec0-f3ed-4fe7-8245-c7797c5d752f">

```Js
function solution(angle) {
    if(0 < angle && angle < 90)
        return 1;
    else if (angle === 90)
        return 2;
    else if (90 < angle && angle < 180)
        return 3;
    else
        return 4;
}
```




