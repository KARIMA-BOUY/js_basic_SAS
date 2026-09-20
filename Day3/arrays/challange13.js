// Challenge 13 : Afficher les Éléments Impairs
// Écrivez un programme JavaScript qui affiche uniquement les éléments impairs d'un tableau d'entiers. 
// Le programme doit demander le nombre d'éléments et les éléments du tableau.


const prompt = require("prompt-sync")();
const nbr = Number(prompt("entrer les nbr d element :"));
let tab = [];
for (let i = 0; i < nbr; i++) {
    const valaur = Number(prompt("entrer les valeur:"));
    if (valaur % 2 !== 0) {
        tab.push(valaur);
    }
} console.log(tab);