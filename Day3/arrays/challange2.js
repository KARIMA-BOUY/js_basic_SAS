// Challenge 2 : Saisie et Affichage des Éléments
// Écrivez un programme JavaScript qui demande à l'utilisateur le nombre d'éléments d'un tableau,
//  puis demande à l'utilisateur de saisir ces éléments.
//  Affichez ensuite les éléments du tableau.

const prompt = require("prompt-sync")();
const nbr = Number(prompt("entrer les nombres d elements:"));
let tab = [];
for (let i = 0; i < nbr; i++) {
    const valeur = Number(prompt("entrer les valeurs du tablaux:"));
    tab.push(valeur);
} console.log(tab);