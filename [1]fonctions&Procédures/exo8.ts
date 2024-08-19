function fibonacci (n:number = 0, x:number = 1): number [] {
    let tab = [n, x];
    for (let i = 2; i <= n; i++) {
        tab.push(tab[i - 1] + tab[i - 2]);
    }

    return tab;

}

console.log(fibonacci(10, 5));