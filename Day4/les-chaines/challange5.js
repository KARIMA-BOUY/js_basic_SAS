// Challenge 5 : Inversion de Chaîne
// Écrivez un programme JavaScript qui lit une chaîne de caractères et affiche la chaîne inversée. 
// Par exemple, si la chaîne est "abcd", le programme doit afficher "dcba".
const prompt=require('prompt-sync')();
const text=prompt("entrer le texte:");
let inverse="";
 for(let i=text.length-1;i>=0;i--){
   inverse=inverse+text[i];
 }
 console.log(inverse);



