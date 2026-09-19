// Écrivez un programme JavaScript piloté par menu pour convertir une année donnée en :
// Mois
// Jours
// Heures
// Minutes
// Secondes
// Pour plus de simplicité, n'incluez pas l'année bissextile (sauf si vous êtes courageux pour le faire).
//  1 an = 365 jours, 1 mois = 30 jours.
 
const prompt=require("prompt-sync")();
const annee=Number(prompt("entrer le nombre des annees:"));
console.log("Menu");
console.log("1- Mois");
console.log("2- jours");
console.log("3- Heures");
console.log("4- Minutes");
console.log("5 -Secondes");
const choix=Number(prompt("enter votre choix:"));
switch(choix){
    case 1:
        console.log("l anne par mois :" + annee*12);break;
    case 2:
        console.log("l anne par jour :"+ annee*365);break;
    case 3:
        console.log("l anne par Heure :"+ annee*365*24);break;
    case 4:
        console.log("l annee par minute :"+ annee*365*24*60);break;
    case 5:
        console.log("l anne par le secande:" +annee*365*24*60*60);break;
    default:
        console.log("error!");
    }













