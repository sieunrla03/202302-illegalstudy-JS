# 13장 스코프
### 과제 13-1 Lexical Environment는 뭘 뜻하는 걸까?
스코프 체인은 실행 컨텍스트의 렉시컬 환경을 연결한 것이다. 전역 렉시컬 환경은 코드가 로드되면 곧바로 생성되고 함수의 렉시컬 환경은 함수가 호출되면 곧바로 생성된다.

### 과제 13-2 아래 코드를 실행해 보시고 왜 저렇게 나오는지 설명하시오
```JS
var x = 1;
function foo() {
    var x = 10;
    bar();
}
function bar() {
    console.log(x);
}

foo();
bar();
```
```JS
//실행결과
1
1
```
# 14장 전역변수의 문제점
### 과제 14-1 아래 콘솔로그에서 뭐가 나올까? 돌려봅시다.
```JS
var x = 'globaaaaal';

function banana() {
    console.log(x); // 여기선 뭐가 나올까??
    //var x = 'loccccccccccccccccccccccal';
}

banana();
console.log(x);
//결과
/*
globaaaaal
globaaaaal
*/
```
```JS
var x = 'globaaaaal';

function banana() {
    console.log(x); // 여기선 뭐가 나올까??
    var x = 'loccccccccccccccccccccccal';
}

banana();
console.log(x);
/*
실행결과
undefined
globaaaaal
*/
```

### 과제 14-2 전역 객체란?무엇인가?
코드가 실행되기 이전 단계에 JS엔진에 의해 어떤 객체보다도 먼저 생성되는 특수 객체이다. 예시로  전역 객체는 브라우저에서는 window, 서버 사이드 환경(Node.js)에서는 global 객체를 의미한다. 전역 객체는 var 키워드로 선언한 전역 변수와 전역 함수를 프로퍼티로 갖는다.

### 과제 14-3 아래 키워드로 사용 억제법을 한 번 찾아보세요.
1. 즉시 실행 함수

    함수 정의와 동시에 호출되는 즉시 실행 함수는 단 한 번만 호출된다. 모든 코드를 즉시 실행 함수로 감싸면 모든 변수는 즉시 실행 함수의 지역 변수가 된다. 이러한 특성을 이용해 전역 변수의 사용을 제한하는 방법
2. 네임스페이스 객체

    전역에 네임스페이스 역할을 담당할 객체를 생성하고 전역 변수처럼 사용하고 싶은 변수를 프로퍼티로 추가하는 방법, 네임스페이스 객체에 또 다른 네임스페이스 객체로 프로퍼티로 추가해서 네임스페이스를 계층적으로 구성할 수도 있음

3. 모듈 패턴

    모듈 패턴은 클래스를 모방해서 관련이 있는 변수와 함수를 모아 즉시 실행 함수로 감싸 하나의 모듈을 만든다. 접근 제한자를 사용하여 공개 범위를 한정 할 수 있다.
4. ES6 모듈

    ES6 모듈을 사용하면 더는 전역변수를 사용할 수 없다. ES6 모듈은 파일 자체으 ㅣ독자적인 모듈 스코프를 제공한다.


### 과제 14-4 전역변수 + 지역변수 관련된 해석을 본인이 직접 최소 30줄 이상의 코드를 작성해서 서술해보세요.
```JS
var kse = 'kimsieun';

function name() {
    var se = 'sieun';
    console.log('지역' + se)
}
name();
console.log('전역' + kse);

var birthday = '생년월일은 2003.11.8';

function age() {
    var sieunAge = '나이는 21살';
    console.log(sieunAge)
}
age();
console.log(birthday)

var hometown = '고향은 Pohang';

function region() {
    var currentlocation = '지금은 Hayang에서 사는중'
    console.log(currentlocation)
}
region();
console.log(hometown)

var highscool = '출신 고등학교 : YuSeong Girls High School';

function School() {
    var university = '대학교 : catholic university of daegu';
    console.log(university)
}
School();
console.log(highscool)
```

# 15장 let,const 키워드와 블록 레벨 스코프
### 과제 15-1 아래 콘솔로그의 결과값을 추론해보세요.
```JS
var x = 1;
var y = 1;

var x = 100;
var y;

console.log(x);
console.log(y);
/*
실행결과
100
1
*/
```

### 과제 15-2 하단의 코드를 실행하고 에러가 난다면 왜 나는지 설명하시오.
```JS
let a = 1;
{
    let a = 2;
    let b = 3;
}
console.log(a);
console.log(b);
```

### 과제 15-3 지금까지 했던 코드를 기반으로 let, const 키워드를 적절히 사용해서 var 키워드 대신 써보세요.
```JS
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter the number of test cases: ', function(N) {
    for (let i = 0; i < N; i++) {
        rl.question('Enter a string: ', function(ls) {
            let count = 0;
            let sumcount = 0; // 리스트를 새로 입력받으면 점수 합계 리셋. 새로 시작
            for (let j = 0; j < ls.length; j++) {
                if (ls[j] === 'O') {
                    count++; // 'O'가 연속되면 점수 1씩 증가
                    sumcount += count; // 누적 점수 계산
                } else {
                    count = 0; // 'O'가 연속되지 않으면 점수 초기화
                }
            }
            console.log(sumcount);
            if (i === N - 1) {
                rl.close();
            }
        });
    }
});
```




