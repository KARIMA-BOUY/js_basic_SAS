// Challenge 5 : Calcul de la Puissance
// Écrivez un programme JavaScript qui calcule la puissance d'un nombre entier base élevé à un exposant exposant.
//  Utilisez une boucle pour effectuer le calcul. Par exemple, pour base = 3 et exposant = 4, le résultat est 3^4 = 81.

const prompt=require("prompt-sync")();
const base=Number(prompt("entrer un base:"));
const exposant=Number(prompt("entrer un exposant:"));

let result=1;
for(let i=0; i< exposant; i++){
    result=result*base;
}
console.log(result);
