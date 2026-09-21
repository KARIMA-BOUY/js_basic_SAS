// Challenge 14 : Calculer la Moyenne
// Écrivez un programme JavaScript qui calcule la moyenne des éléments d'un tableau d'entiers.
//  Le programme doit demander le nombre d'éléments, les éléments du tableau, puis afficher la moyenne.


const prompt = require("prompt-sync")();
const nbr = Number(prompt("entrer les nbr d element :"));
let tab = [];
let sum = 0;
for (let i = 0; i < nbr; i++) {
    const valaur = Number(prompt("entrer les valeur:"));
    tab.push(valaur);
    sum = sum + valaur;
}
const moyenne = sum / nbr;
console.log(moyenne);
