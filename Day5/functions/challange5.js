// Challenge 5 : Fonction de Factorielle
// Écrivez une fonction JavaScript qui calcule la factorielle d'un entier positif. La fonction doit prendre un entier en paramètre et retourner sa factorielle. 
// Utilisez cette fonction pour afficher la factorielle d'un nombre donné.

function factorielle(n){
    let result=1;
    for(let i=1;i<n;i++){
      result=result*i;
    }
    return result;
}console.log(factorielle(7));

