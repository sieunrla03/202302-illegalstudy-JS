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