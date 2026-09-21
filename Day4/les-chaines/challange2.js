// Challenge 2 : Longueur de la Chaîne
// Écrivez un programme JavaScript qui calcule et affiche la longueur d'une chaîne de caractères sans utiliser la propriété length.

// const prompt=require("prompt-sync")();
// const text=prompt("entrer une texte:");
// let compt=0;

// for(let i=0;i<text.length;i++){
//   compt++;
// }
// console.log(compt);


const prompt=require("prompt-sync")();
const text=prompt("entrer une texte:");
let compt=0;
for(let char of text){
 compt++;
}
console.log(compt);