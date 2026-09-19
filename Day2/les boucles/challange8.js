// Challenge 8 : Affichage de la Suite de Fibonacci
// Écrivez un programme JavaScript qui génère les n premiers termes de la suite de Fibonacci, où n est entré par l’utilisateur.
//  La suite de Fibonacci est définie comme suit : F(0) = 0, F(1) = 1, et F(n) = F(n-1) + F(n-2).


const prompt = require("prompt-sync")();
const n = Number(prompt("Entrer le nombre de termes : "));
let a=0;
let b=1;
for(let i=0;i<n;i++){
    console.log(a);
    let resultas=a+b;
    a=b;
    b=resultas;
    // console.log(resultas);
}
