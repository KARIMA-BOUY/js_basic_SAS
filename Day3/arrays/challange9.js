//  Inversion d'un Tableau
// Écrivez un programme JavaScript qui inverse les éléments d'un tableau d'entiers. 
// Par exemple, si le tableau est [1, 2, 3, 4, 5], il doit devenir [5, 4, 3, 2, 1]. 
// Affichez le tableau inversé.


const prompt = require("prompt-sync")();
const nbr = Number(prompt("entrer les nombres d element :"));
let tab = [];
let inverse = [];

for (let i = 0; i < nbr; i++) {
    const valaur = Number(prompt("entre les valeur du tablaux:"));
    tab.push(valaur);
}
for (let i = 0; i < tab.length - 1; i--) {
    inverse.push(tab[i]);
}
console.log(tab);
console.log(inverse);