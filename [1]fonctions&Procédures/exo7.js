"use strict";
function operationOnNumber(n, x) {
    const operationFunctions = [
        (n, x) => n + x,
        (n, x) => n * x,
        (n, x) => n - x,
        (n, x) => n / x
    ];
    const results = [];
    for (let i = 0; i < operationFunctions.length; i++) {
        results.push(operationFunctions[i](n, x));
    }
    return results;
}
console.log(operationOnNumber(2, 3));
