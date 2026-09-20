// Challenge 8 : Copie d'un Tableau
// Écrivez un programme JavaScript qui copie les éléments d'un tableau d'entiers dans un autre tableau. 
// Affichez les éléments du tableau original et du tableau copié pour vérifier que la copie est correcte.

const prompt = require("prompt-sync")();
const nbr = Number(prompt("entrer les nombre d element de tablaux:"));
let tab = [];
let copie = [];
for (let i = 0; i < nbr; i++) {
    const valaur = Number(prompt("entrer les valeur de tablaux:"));
    tab.push(valaur);
}
for (let i = 0; i < tab.length; i++) {
    copie.push(tab[i]);
} console.log(tab);
console.log(copie);