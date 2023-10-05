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