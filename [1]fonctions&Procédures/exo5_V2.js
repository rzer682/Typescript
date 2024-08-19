"use strict";
/* Écrire une fonction anonyme assignée à une variable qui prend un tableau d'objets et un nom de
propriété, et renvoie un nouveau tableau trié par cette propriété. La fonction doit gérer les cas
où la propriété n'existe pas dans certains objets .*/
//1. initialistation d'une variable qui prend un tableau d'objets et un nom de propriété.
const tableauATrier = function (tableau, nomPropriété) {
    let tableauTrie = tableau; // 2. initialsistation d'une copy d'une tableau
    for (let i = 0; i < tableauTrie.length; i++) {
        for (let j = 0; j < tableauTrie.length - 1; j++) {
            if (tableauTrie[j] > tableauTrie[j + 1]) {
                let temp = tableauTrie[j];
                tableauTrie[j] = tableauTrie[j + 1];
                tableauTrie[j + 1] = temp;
            }
        }
        return tableauTrie;
    }
};
