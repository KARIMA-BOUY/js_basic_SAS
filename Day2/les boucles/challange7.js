// Inversion d'un Entier
// Écrivez un programme JavaScript qui lit un entier à plusieurs chiffres et l'affiche en ordre inverse sans utiliser de tableaux.
//  Par exemple, si l'entrée est 12345, affichez 54321.

const prompt=require("prompt-sync")();
const n=prompt("entrer les chiffres: ");
let inverse=0;
while(n>0){
    let inverse=n%10;
    inverse=inverse*10+n;
    n=Math.floor(n/10);
}
console.log(inverse);