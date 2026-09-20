// Challenge 5 : Trouver le Minimum
// Écrivez un programme JavaScript qui trouve et affiche le plus petit élément dans un tableau d'entiers. 
// Le programme doit demander le nombre d'éléments et les éléments du tableau.


const prompt = require("prompt-sync")();
const nbr = Number(prompt("entrer les nombre d element"));
let tab = [];
for (let i = 0; i < nbr; i++) {
    const valeur = Number(prompt("entrer les valeur du tablaux:"));
    tab.push(valeur);
}
let min = tab[0];
for (let i = 1; i < tab.length; i++) {
    if (tab[i] < min) {
        min = tab[i];
    }
} console.log(min);
