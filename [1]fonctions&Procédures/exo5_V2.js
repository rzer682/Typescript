"use strict";
/* Écrire une fonction anonyme assignée à une variable qui prend un tableau d'objets et un nom de
propriété, et renvoie un nouveau tableau trié par cette propriété. La fonction doit gérer les cas
où la propriété n'existe pas dans certains objets .*/
//1. initialistation d'une variable qui prend un tableau d'objets et un nom de propriété.
const tableauATrier = (tableau, nomPropriété) => {
    if (!(nomPropriété in tableau)) {
        console.log(`la propriété ${nomPropriété} n'existe pas dans ${tableau}`);
        return;
    }
    let tableauTrie = []; // 2. initialsistation d'un nouveau tableau vide
    let minVal = tableau[0][nomPropriété]; // 3. renvoie un nouveau tableau trié par cette propriété
    for (let i = 0; i < tableau.length - 1; i++) {
        if (tableau[i][nomPropriété] < minVal) {
            minVal = tableau[i][nomPropriété];
            tableauTrie.push(tableau[i]);
        }
        for (let j = 0; j < tableau.length - i - 1; j++) {
            if (tableau[j][nomPropriété] > tableau[j][nomPropriété]) {
                tableauTrie.push(tableau[j]);
            }
        }
    }
    return tableauTrie;
};
const persons = [
    { nom: "Alice", age: 25 },
    { nom: "Bob", age: 30 },
    { nom: "Charlie", age: 22 }
];
// Appeler la fonction pour trier le tableau par la propriété 'age'
const personnesTries = tableauATrier(persons, 'age');
console.log(personnesTries);
