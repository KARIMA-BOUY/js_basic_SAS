// Écrivez un programme JavaScript qui demande un nombre à l’utilisateur
//  et affiche sa table de multiplication de 1 à 10. Par exemple, pour le nombre 4, affichez :

const prompt=require("prompt-sync")();
const nombre=Number(prompt("entrer une number"));
 for(let i=1;i<=10;i++){
    let result=nombre*i;
    console.log(`${nombre}*${i}= ${result}`);
 } 
 