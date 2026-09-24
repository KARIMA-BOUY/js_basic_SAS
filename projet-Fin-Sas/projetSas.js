const prompt=require("prompt-sync")();
function Menu(){
    let choix;
    do{
        console.log("Menu");
        console.log("1.Ajouter un nouvaux condidat");
        console.log("2.Ajouter plusieurs candidats a la fois");
        console.log("3.Afficher la liste du candidats:");
        console.log("4.voter pour un condidat ");
        console.log("5.Modifier les informations d'un candidat");
        console.log("6.Supprimer un candidat");
        console.log("7. Rechercher des candidats ");
        console.log("8. Statistiques de l'élection");
        console.log("0.Quiter");
        choix=Number(prompt("entrer votre choix:"));
        switch(choix){

        }
    }
}while(choix!==0);