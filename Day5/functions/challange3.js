// Challenge 3 : Somme des Éléments
// Écrivez un programme JavaScript qui calcule et affiche la somme des éléments d'un tableau d'entiers. 
// Le programme doit demander le nombre d'éléments, puis les éléments du tableau, et afficher la somme totale.

const prompt=require("prompt-sync")();
function SomeFunction(){
    const n=Number(prompt("entrer les nombre d elements:"));
    let tab=[];
    let sum=0;
    for(let i=0;i<n;i++){
        const valeur=Number(prompt("entre les valeur du l element :"));
        tab.push(valeur);
        sum=sum+valeur;
    }console.log(sum);
}
SomeFunction();




