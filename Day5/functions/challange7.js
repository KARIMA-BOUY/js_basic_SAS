// Challenge 7 : Fonction de Compte à Rebours
// Écrivez une fonction JavaScript qui prend un entier positif en paramètre et affiche tous les nombres de cet entier jusqu'à 0. 
// Utilisez une boucle dans la fonction et appelez-la avec plusieurs valeurs pour vérifier son fonctionnement.


function Compt(nbr){
 for(let i=nbr;i>=0;i--){
   console.log(i);
 }
}
Compt(6);
