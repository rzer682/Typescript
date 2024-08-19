"use strict";
function fibonacci(n, x) {
    let tab = [0, 1];
    for (let i = 2; i <= n; i++) {
        tab.push(tab[i - 1] + tab[i - 2]);
    }
    return tab;
}
console.log(fibonacci(10, 5));
