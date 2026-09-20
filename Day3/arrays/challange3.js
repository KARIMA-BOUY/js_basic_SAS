//  Somme des Éléments
// Écrivez un programme JavaScript qui calcule et affiche la somme des éléments d'un tableau d'entiers. 
// Le programme doit demander le nombre d'éléments, puis les éléments du tableau, et afficher la somme totale.

const prompt = require("prompt-sync")();
const nbr = Number(prompt("entrer les nombre d element de tablaux:"));
let tab = [];
let sum = 0;
for (let i = 0; i < nbr; i++) {
    const valeur = Number(prompt("entre la valeur de tablaux:"));
    tab.push(valeur);
    sum = sum + valeur;
} console.log(sum);