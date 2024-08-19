"use strict";
function factorielle(n) {
    let fact = 1;
    for (let i = 1; i <= n; i++) {
        fact *= i;
    }
    console.log(fact);
}
factorielle(10);
