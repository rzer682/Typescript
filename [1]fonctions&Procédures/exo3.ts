/* Écrire une fonction qui prend deux nombres entiers start et end, et un pas optionnel step (défaut 
1), et renvoie un tableau contenant tous les entiers de start à end avec le pas donné. */

function tableauEntier(start: number, end: number, step: number = 1): number[] {
    let tab: number[] = [];
    for (let i = start; i <= end; i += step) {
        tab.push(i);
    }
    return tab;
}

console.log(tableauEntier(4, 10));