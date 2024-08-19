"use strict";
/* Écrire une procédure qui prend deux nombres entiers positifs n et m, et affiche la somme de tous
les multiples de m qui sont inférieurs ou égaux à n. */
function somme(n, m) {
    let somme = 0;
    for (let i = 0; i <= n; i++) {
        if (i % m == 0) {
            somme += i;
        }
    }
    console.log(somme);
}
somme(25, 5);
