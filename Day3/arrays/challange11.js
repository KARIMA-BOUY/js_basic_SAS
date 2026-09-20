// Challenge 11 : Remplacer un Élément
// Écrivez un programme JavaScript qui remplace toutes les occurrences d'une valeur spécifique dans un tableau d'entiers par une nouvelle valeur.
//  Le programme doit demander à l'utilisateur le nombre d'éléments, 
// les éléments du tableau, la valeur à remplacer, et la nouvelle valeur.


const prompt = require("prompt-sync")();
const nbr = Number(prompt("entrer les nbr d element :"));
let tab = [];
for (let i = 0; i < nbr; i++) {
    const valaur = Number(prompt("entrer les valeur:"));
    tab.push(valaur);
}
const remplace = Number(prompt("entrer la valeur a remplacer:"));
const nouvelle = Number(prompt("entrer la valeur a nouvelle:"));
for (let i = 0; i < tab.length; i++) {
    if (tab[i] == remplace) {
        tab[i] = nouvelle;
    }
} console.log(tab);