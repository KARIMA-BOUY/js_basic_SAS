// Challenge 3 : Somme des N Nombres
// Écrivez un programme JavaScript qui demande un nombre entier n à l’utilisateur et calcule la somme des n premiers nombres naturels.
//  Par exemple, pour n = 4, la somme est 1 + 2 + 3 + 4 = 10.
const prompt=require("prompt-sync")();
const n=Number(prompt("entrer un nombre entier:"));
let sum=0;
for(let i=1;i<=n;i++){
   sum=sum+i;
console.log(`la somme de ${n}=${sum}`);
}