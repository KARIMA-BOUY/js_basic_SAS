//  Compteur de Chiffres
// Écrivez un programme JavaScript qui demande à l’utilisateur un entier positif et compte le nombre de chiffres dans cet entier.
//  Par exemple, pour n = 12345, affichez : Nombre de chiffres = 5.

const prompt = require("prompt-sync")();
let n = Number(prompt("Entrez un entier positif : "));
let compteur = 0;
while (n > 0) {
    n = Math.floor(n / 10);
    compteur++;
}
console.log("Nombre de chiffres =", compteur);












