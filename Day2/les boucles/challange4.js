// Challenge 4 : Affichage des N Premiers Nombres Impairs
// Écrivez un programme JavaScript qui demande un nombre entier n et affiche les n premiers nombres impairs.
//  Par exemple, pour n = 5, affichez : 1, 3, 5, 7, 9.

const prompt=require("prompt-sync")();
const n=prompt("entrer le nombre n:");
for(let i=1;i<=n*2; i+=2){
    console.log(i);
}