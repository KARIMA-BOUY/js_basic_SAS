// Challenge 2 : Factorielle d'un Nombre
// Écrivez un programme JavaScript qui calcule la factorielle d'un nombre entier positif n entré par l’utilisateur.
//  La factorielle de n est le produit de tous les entiers positifs inférieurs ou égaux à n. Par exemple, pour n = 5, affichez : 5! = 120.
const prompt=require("prompt-sync")();
const n=Number(prompt("enter un nombre positif :"));

let facto=1;
for(let i=1;i<=n;i++){
    facto=facto*i;
}
console.log(`${n}=${facto}`);
