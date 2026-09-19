// Challenge 6 : Affichage des N Premiers Nombres Pair
// Écrivez un programme JavaScript qui demande un nombre entier n et affiche les n premiers nombres pairs.
//  Par exemple, pour n = 4, affichez : 2, 4, 6, 8.

const prompt=require("prompt-sync")();
const n=Number(prompt("entrer un nombre entier:"));
for(let i=1;i<=n;i++){
    console.log(i*2);
}