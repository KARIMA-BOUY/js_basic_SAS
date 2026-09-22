// Challenge 5 : Objet et Fonction de Retour
// Écrivez un programme JavaScript qui crée un objet pour représenter un livre avec les propriétés titre, auteur et année.
//  Écrivez une fonction qui retourne un objet initialisé avec des valeurs données. Affichez les informations du livre.


function livre(titre,auteur,annee){
    return{
        titre:titre,
        auteur:auteur,
        annee:annee,
    };
}
const result=livre("la boite a mervaeille","ahmed sefrioui",1945);
console.log(result.titre);
console.log(result.auteur);
console.log(result.annee);




function livre(titre,auteur,annee){
    return{
        titre:titre,
        auteur:auteur,
        annee:annee,
    };
} const result=livre("la boite a merveille","ahmed sefroui",1945);
console.log(result.titre);