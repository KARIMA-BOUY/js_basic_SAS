// Challenge 10 : Trouver un Sous-String
// Écrivez un programme JavaScript qui lit une chaîne de caractères principale et une sous-chaîne, 
// puis vérifie si la sous-chaîne est présente dans la chaîne principale.
//  Affichez un message indiquant si la sous-chaîne est trouvée ou non.

const prompt=require("prompt-sync")();
const text=prompt("entrer le text:");
const souschaine=prompt("entrer le sous text:");
if(text.includes(souschaine)){
    console.log("la sous-chaine trouvee");
}else{
   console.log("le sous-chaine non trouver");
}
