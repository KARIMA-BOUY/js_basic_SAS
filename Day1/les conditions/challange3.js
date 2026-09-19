const prompt=require("prompt-sync")();
const nb1=prompt("entrer la premier nombre:") ;
const nb2= prompt("entrer la deuxieme nombre:");
let somme=nb1+nb2;
if(nb1===nb2){
    somme=somme*3;
}
console.log(somme);
