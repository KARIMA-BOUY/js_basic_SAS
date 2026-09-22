// Challenge 3 : Passage d'un Objet en Argument
// Écrivez un programme JavaScript qui crée un objet pour représenter un rectangle avec les propriétés longueur et largeur.
//  Écrivez une fonction qui prend cet objet en argument et calcule l'aire du rectangle. Affichez l'aire.


const rectangle={
   longeur:10,
   largeur:15,
};
function laire(rectangle){
   return rectangle.largeur*rectangle.largeur
}
const result=laire(rectangle);
console.log(result);




function laire(rectangle){
    return rectangle.longeur*rectangle.largeur;
}
const result=laire(rectangle);
console.log(result);
