
// Challenge 3 : Gestion des Congés
// Écrivez un programme JavaScript pour déterminer les jours de congé restant en fonction de :
// Nombre total de jours de congés accordés
// Nombre de jours de congés utilisés
// Statut de l'employé (0 pour temps partiel, 1 pour temps plein)
// Les règles de gestion sont :
// Temps plein : Jours restants = Jours accordés - Jours utilisés
// Temps partiel : Jours restants = (Jours accordés / 2) - Jours utilisés
// Si les jours utilisés dépassent les jours accordés, affichez un message d'alerte.

const prompt = require("prompt-sync")();
let accordes = Number(prompt("Nombre total de jours accordes: "));
let utilises = Number(prompt("Nombre de jours utilises : "));
let statut = Number(prompt("Statut 0 = temps partiel, 1 = temps plein: "));
let restants;
if (utilises > accordes) {
    console.log("Alerte : Les jours utilisés dépassent les jours accordés !");
} else {
    if (statut === 1) {
        restants = accordes - utilises;
    } else if (statut === 0) {
        restants = (accordes / 2) - utilises;
    } else {
        console.log("Statut invalide !");
    }

    if (restants !== undefined) {
        console.log("Jours de congé restants : " + restants);
    }
}