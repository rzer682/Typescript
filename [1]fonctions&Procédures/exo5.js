"use strict";
/*Écrire une fonction anonyme assignée à une variable qui prend un tableau d'objets et un nom de
propriété, et renvoie un nouveau tableau trié par cette propriété. La fonction doit gérer les cas
où la propriété n'existe pas dans certains objets.*/
// 1.fonction anonyme  assignée à une variable qui prend un tableau d'objets et un nom de propriété.
const triTableau = (tableau, nomPropriété) => {
    if (!(nomPropriété in tableau)) {
        return 0;
    }
    return tableau.sort((a, b) => a[nomPropriété] - b[nomPropriété]); // 2. renvoie un nouveau tableau trié par cette propriété
};
//test de la fonction
// Exemple de tableau d'objets à trier
const personnes = [
    { nom: "Alice", metier: 'maçoneur' },
    { nom: "Bob", age: 30 },
    { nom: "Charlie", age: 22 }
];
// Appeler la fonction pour trier le tableau par la propriété 'age'
const personnesTriees = triTableau(personnes, 'age');
// Afficher le résultat
console.log(personnesTriees);
