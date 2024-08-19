function factorielle (n: number): void {
    let fact: number = 1;
    for (let i: number = 1; i <= n; i++) {
        fact *= i;
    }
    console.log(fact);
}


factorielle(10)