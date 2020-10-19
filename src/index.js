module.exports = reverse;

function reverse (n) {
    let a;
    let result = 0;
    n < 0 ? a = Math.abs(n) : a = n;
    while (a) {
        result = result * 10 + a % 10;
        a = Math.floor(a / 10);
    }
    return result;
}

console.log(reverse(520));
