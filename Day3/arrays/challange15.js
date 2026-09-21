// Challenge 15 : Fusion de Deux Tableaux
// Écrivez un programme JavaScript qui fusionne deux tableaux d'entiers en un seul tableau. 
// Le programme doit demander à l'utilisateur le nombre d'éléments pour chaque tableau,
//  puis les éléments des deux tableaux, et afficher le tableau fusionné.

const prompt = require("prompt-sync")();
const nbr = Number(prompt("entrer les nbr d element :"));
let tab1 = [];
for (let i = 0; i < nbr; i++) {
    const valaur = Number(prompt("entrer les valeur:"));
    tab1.push(valaur);
}
let tab2 = [];
for (let i = 0; i < nbr; i++) {
    const valaur = Number(prompt("entrer les valeur:"));
    tab2.push(valaur);
}
let fusion = [];
for (let i = 0; i < tab1.length; i++) {
    fusion.push(tab1[i]);
}
for (let i = 0; i < tab2.length; i++) {
    fusion.push(tab2[i]);
}
console.log(fusion);