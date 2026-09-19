// Écrivez un programme pour vérifier si le nombre donné est positif, négatif ou nul. 
// Si le nombre est inférieur à zéro, alors le nombre est négatif et si le nombre est supérieur à zéro,
//  alors le nombre est positif. Si les deux conditions sont fausses, le nombre est égal à zéro.

const prompt=require("prompt-sync")();
const nomber=Number(prompt("entrer votre number:"));
if (nomber>0){
    console.log("votre nombre et positif");
}else if(nomber<0){
     console.log("votre nombre et negatif");
}else{
    console.log("le nombre est egal à zero");
}
