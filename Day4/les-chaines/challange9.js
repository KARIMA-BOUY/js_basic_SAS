// Challenge 9 : Suppression des Espaces
// Écrivez un programme JavaScript qui lit une chaîne de caractères et supprime tous les espaces. Affichez la chaîne résultante.

const prompt = require("prompt-sync")();
const texete = prompt("entrer le text: ");
let result = "";
for (let i = 0; i < texete.length; i++) {
    if (texete[i] !== " ") {
        result = result + texete[i];
    }
}
console.log(result);

