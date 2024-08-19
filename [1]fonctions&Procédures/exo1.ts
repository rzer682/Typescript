/* Écrire une procédure qui prend deux nombres entiers positifs n et m, et affiche la somme de tous 
les multiples de m qui sont inférieurs ou égaux à n. */

function somme(n: number, m: number): void {
    let somme: number = 0;
    for (let i: number = 0; i <= n; i++) {
        if (i % m == 0) {
            somme += i;
        }
    }
    console.log(somme);
}

somme(25, 5);