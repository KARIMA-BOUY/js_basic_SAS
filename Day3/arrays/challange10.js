// Challenge 10 : Rechercher un Élément
// Écrivez un programme JavaScript qui recherche un élément spécifique dans un tableau d'entiers en utilisant une recherche linéaire. 
// Le programme doit demander à l'utilisateur le nombre d'éléments,
//  les éléments du tableau, et l'élément à rechercher, puis afficher si l'élément est présent ou non.


const prompt = require("prompt-sync")();
const nbr = Number(prompt("entrer les nombre d elements:"));
let tab = [];
for (let i = 0; i < nbr; i++) {
    const valaur = Number(prompt("entrer les valeurs :"));
    tab.push(valaur);
}
const recherche = Number(prompt("entrer l element rechercher:"));
let trouve = false;
for (let i = 0; i < tab.length; i++) {
    if (tab[i] === recherche) {
        trouve = true;
    }
}
if (trouve === true) {
    console.log("l'élément est présent");
} else {
    console.log("l'élément non présent")
}