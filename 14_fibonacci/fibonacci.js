const fibonacci = function(n) {
    let fib = [];

    fib[0] = 1;
    fib[1] = 1;

    if (typeof n === 'string') {
        n = Number(n);
    }

    if (n === 0) {
        return 0;
    } else if (n < 0) {
        return "OOPS";
    } else {
        for (let i = 2; i <= n - 1; i++){
            fib[i] = fib[i - 1] + fib[i - 2];
        }
        return fib[n - 1];
    }
};

// Do not edit below this line
module.exports = fibonacci;
