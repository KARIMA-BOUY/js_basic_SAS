// Challenge 4 : Comparaison de Chaînes
// Écrivez un programme JavaScript qui lit deux chaînes de caractères et compare si elles sont égales ou non. 
// Affichez un message indiquant si les chaînes sont égales ou différentes.


const prompt=require("prompt-sync")();
const text1=prompt("entrer la premiere:");
const text2=prompt("entrer le deuxieme:");
if(text1==text2){
    console.log("les chaînes sont égales");
}else{
    console.log("les chaînes sont differentes");
}
