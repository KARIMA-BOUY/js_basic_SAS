// Challenge 5 : Trouver le Minimum
// Écrivez un programme JavaScript qui trouve et affiche le plus petit élément dans un tableau d'entiers.
//  Le programme doit demander le nombre d'éléments et les éléments du tableau.

function Minimum(a,b){
    if(a<b){
        return a;
    }else{
        return b;
    }
}const result=Minimum(5,6);
console.log(result);