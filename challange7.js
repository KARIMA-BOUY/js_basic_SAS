// hallenge 7 : Tableau en Ordre Croissant
// Écrivez un programme JavaScript qui demande à l'utilisateur de saisir un tableau d'entiers,
//  puis affiche le tableau trié en ordre croissant sans utiliser de fonction de tri prédéfinie.

const prompt=require("prompt-sync")();
const n=Number(prompt("entrer les nombres des elements:"));
let tab=[];
for(let i=0;i<n;i++){
    tab[i]=prompt("entrer les valeur de tablaux:");
}
for(let i=0;i<n;i++){
    for(let j=i+1;j<n;j++){
        if(tab[i]>tab[j]){
            let tem=tab[i];
            tab[i]=tab[j];
            tab[j]=tem;
        }
    }
}console.log(tab);
