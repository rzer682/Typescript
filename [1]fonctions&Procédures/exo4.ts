/* Écrire une fonction qui prend deux nombres start et end et renvoie un tableau contenant tous les 
nombres premiers entre start et end inclusivement. Un nombre premier est un nombre entier 
supérieur à 1 qui n'a aucun diviseur autre que 1 et lui-même. */

function tableauPremier(start : number, end : number, step : number) : number [] {
    let tab = [];
    for (let i = start ; i <= end; i += step) {
        if (i > 1) {
            let estPremier = true; 
            for (let j = 2; j <i ; j++){
                if (i % j === 0) {
                    estPremier =false;
                    break;
                }
            }
            if (estPremier) {
                tab.push(i);
            }
        } 
    } return tab;
} 

console.log(tableauPremier(1, 10, 2));