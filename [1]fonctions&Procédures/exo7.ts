function operationOnNumber(n: number, x: number): number[] {
    const operationFunctions: ((n: number, x: number) => number)[] = [
        (n: number, x: number) => n + x,
        (n: number, x: number) => n * x,
        (n: number, x: number) => n - x,
        (n: number, x: number) => n / x
    ];

    const results: number[] = [];
    for (let i = 0; i < operationFunctions.length; i++) {
        results.push(operationFunctions[i](n, x));
    }
    return results;
}

console.log(operationOnNumber(2, 3));


