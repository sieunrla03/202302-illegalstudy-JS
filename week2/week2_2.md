# 11강 대신 하는 얕은 복사, 깊은 복사
### 과제 11-1 밑의 코드를 실행해보고 이유를 생각해보시오.
```JS
const original = [
[18, 18, 18, 18],
[19, 19, 19, 19],
[20, 20, 20, 20],
[21, 21, 21, 21],
];

const copy = original.slice();

console.log(JSON.stringify(original) === JSON.stringify(copy));

copy[0][0] = 99;
copy[2].push("02");

console.log(JSON.stringify(original) === JSON.stringify(copy));
console.log(original);
console.log(copy);

```
```JS
//실행결과
true
true
[
  [ 99, 18, 18, 18 ],
  [ 19, 19, 19, 19 ],
  [ 20, 20, 20, 20, '02' ],
  [ 21, 21, 21, 21 ]
]
[
  [ 99, 18, 18, 18 ],
  [ 19, 19, 19, 19 ],
  [ 20, 20, 20, 20, '02' ],
  [ 21, 21, 21, 21 ]
]
```
original배열과 copy배열은 같은 배열을 참조 한다. slice() 메소드는 얕은 복사를 수행함에 따라 copy 배열은 original 배열과 같은 객체를 참조한다. console.log(JSON.stringify(original) === JSON.stringify(copy));에서 두 배열이 동일한 내용을 가지고 있다. 따라서 true가 반환되고 요소를 수정하는 줄에서 copy배열과 original배열은 여전히 같은 객체를 참조함으로 copy배열을 수정하면 original 배열에도 영향을 미친다. 두 배열의 첫 번째 요소가 동일한 객체를 가리키므로 값이 변경되면 두 배열에 모두 반영한다.
+ silec() 메소드를 사용한 얕은 복사로 두 배열은 같은 배열을 참조하게 됨

### 과제 11-2 밑에 있는 코드들을 실행해 보시고 이유를 생각해보세요.
```JS
const obj = { a: 1 };
const newObj = Object.assign({}, obj);

newObj.a = 2;

console.log(obj);
console.log(obj === newObj);
//실행결과
// { a: 1 }
// false
```
Object.assign()을 사용하여 얕은 복사가 진행됐고 객체의 속성들은 복사되지만 새로 생성된 객체는 별개로 유지됨. 결론적으로 obj와 newobj는 서로 다른 객체, newobj의 변경점은 obj에 영향을 미치지 않음 따라서 false 결과값이 나옴

```JS
const obj = {
  a: 1,
  b: {
    c: 2,
  },
};

const newObj = Object.assign({}, obj);

newObj.b.c = 3;

console.log(obj);
console.log(obj.b.c === newObj.b.c);
//실행결과 
// { a: 1, b: { c: 3 } }
// true
```
newobj 객체의 내부 객체 b 객체의 c 속성을 수정하면 obj 객체에도 동일한 변경 사항이 반영됨. 얕은 복사로 내부 객체는 동일한 참조함. 따라서 true 결과값이 나옴.

### 과제 11-3 알잘딱 위처럼
```JS
const obj = { a: 1 };
const newObj = Object.assign({}, obj);

newObj.a = 2;

console.log(obj);
console.log(obj === newObj);
//실행결과
//{ a: 1 }
//false
```
위의 과제 11-2(1)과 같은 이유
Object.assign()을 사용하여 얕은 복사가 진행됐고 객체의 속성들은 복사되지만 새로 생성된 객체는 별개로 유지됨. 결론적으로 obj와 newobj는 서로 다른 객체, newobj의 변경점은 obj에 영향을 미치지 않음 따라서 false 결과값이 나옴
```JS
const obj = {
  a: 1,
  b: {
    c: 2,
    },
};
const newObj = { ...obj };

newObj.b.c = 3;

console.log(obj);
console.log(obj.b.c === newObj.b.c);
//실행결과
// { a: 1, b: { c: 3 } }
// true
```
위의 과제 11-2(2)과 같은 이유
newobj 객체의 내부 객체 b 객체의 c 속성을 수정하면 obj 객체에도 동일한 변경 사항이 반영됨. 얕은 복사로 내부 객체는 동일한 참조함. 따라서 true 결과값이 나옴.

### 과제 11-3 아래 함수를 작동 시켜보세요
```JS
function deepCopy(obj) {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }
  let copy = {};
  for (let key in obj) {
    copy[key] = deepCopy(obj[key]);
  }
  return copy;
}

const obj = {
  a: 1,
  b: {
    c: 2,
  },
  func: function () {
    return this.a;
  },
};

const newObj = deepCopy(obj);

newObj.b.c = 3;

console.log(obj);
console.log(obj.b.c === newObj.b.c);

```
```JS
//실행결과
{ a: 1, b: { c: 2 }, func: [Function: func] }
false
```


### 과제 11-4 Lodash cloneDeep 라이브러리에 대해 조사하고 cloneDeep 메서드도 조사해보시오.
```JS
// & npm i lodash 으로 설치
const lodash = require("lodash");

const obj = {
    a: 1,
    b: {
        c: 2,
    },
func: function () {
    return this.a;
    },
};

const newObj = lodash.cloneDeep(obj);

newObj.b.c = 3;
console.log(obj); // { a: 1, b: { c: 2 }, func: [Function: func] }
console.log(obj.b.c === newObj.b.c); // false
```
```JS
//실행결과
{ a: 1, b: { c: 2 }, func: [Function: func] }
false
```
JS의 라이브러리 중 하나이고, array, collection, data 등 데이터의 필수적인 구조를 쉽게 다룰 수 있게하기 위해 사용. 브라우저에서 지원하지 않는 성능이 보장되어있는 다양한 메소드를 가지고 있음.CloneDeep은 복사괸 모든 값이 내부 자식 요소를 포함하여 모두 참조 형태가 아닌 새로운 값이 매핑되는 형태로 복사됨을 말함.

### 과제 11-5 소개한 방법 이외에도 깊은복사, 얕은복사 방법을 찾아보세요 가능하다면 언어 별로 정리해도 좋고, JS만 하셔도 좋고, 단일 언어 하나만 해도 좋습니다.
전개구문도 assign()과 같이 복사한 객체 자체는 깊은 복사이지만 내부의 객체는 얕은 복사가 진행된다.
```JS
let origin = {
  a:1,
  b:{c:2}
};
let copy = {...origin}
copy.b.c = 3

console.log(origin === copy) //flase
console.log(origin.b.c === copy.b.c)//true
```
spread syntax는 가장 간단하게 객체를 얕은 복사할 수 있다. spread syntax는 중첩된 객체는 깊게 복사하지 못한다는 특징이 있다.
```JS
const copyObj = <T extends Record<string, any>>(obj: T): T => {
  return { ...obj };
};

const copyPerson = copyObj(person);

console.log(person === copyPerson);
// => false
```