// Challenge 6 : Compte des Occurrences d'un Caractère
// Écrivez un programme JavaScript qui lit une chaîne de caractères et un caractère, 
// puis compte et affiche combien de fois le caractère apparaît dans la chaîne.

const prompt=require("prompt-sync")();
const chaine=prompt("entrer le chaine de caracter:");
const caractere=prompt("entrer le caractere");
let compt=0;
for(let i=0;i<chaine.length;i++){
   if(chaine[i]==caractere){
    compt++
   }
}
console.log(compt);