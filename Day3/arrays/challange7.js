// Challenge 7 : Tableau en Ordre Croissant
// Écrivez un programme JavaScript qui demande à l'utilisateur de saisir un tableau d'entiers, 
// puis affiche le tableau trié en ordre croissant sans utiliser de fonction de tri prédéfinie.
const prompt = require("prompt-sync")();
const nbr = Number(prompt("entrer les nombre d element de tablaux: "));
let tab = [];
for (let i = 0; i < nbr; i++) {
    const valaur = Number(prompt("entrer les valeur de tablaux:"));
    tab.push(valaur);
}
for (let i = 0; i < nbr; i++) {
    for (let j = i + 1; j < nbr; j++) {
        if (tab[i] > tab[j]) {
            let tem = tab[i];
            tab[i] = tab[j];
            tab[j] = tem;
        }
    }
} console.log(tab);
