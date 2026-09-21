// Challenge 8 : Conversion en Minuscules
// Écrivez un programme JavaScript qui lit une chaîne de caractères et convertit tous les caractères en minuscules.
//  Affichez la chaîne modifiée.


const prompt=require("prompt-sync")();
const text=prompt("entrer le text:");
let minuscules=text.toLowerCase();
console.log(minuscules);