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