// Challenge 6 : Multiplication des Éléments
// Écrivez un programme JavaScript qui multiplie chaque élément d'un tableau d'entiers par un facteur donné et affiche le tableau résultant.
//  Le programme doit demander le nombre d'éléments,
//  les éléments du tableau, et le facteur de multiplication.

const prompt = require("prompt-sync")();
const nbr = Number(prompt("entrer les nombres d elements de tablaux:"));
let tab = [];
for (let i = 0; i < nbr; i++) {
    const valeur = Number(prompt("entrer les valaur d element :"));
    tab.push(valeur);
}
const fact = Number(prompt("entrer le facto :"));
for (let i = 0; i < tab.length; i++) {
    tab[i] = tab[i] * fact;
}
console.log(tab);

