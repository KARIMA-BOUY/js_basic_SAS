// Challenge 4 : Évaluation de Performance d'Employé
// Écrivez un programme JavaScript pour évaluer la performance d'un employé en fonction de :
// Score de performance (de 0 à 100)
// Ancienneté (en années)
// Récompenses reçues (0 pour aucune, 1 pour une, 2 pour deux ou plus)
// Les évaluations sont :
// Score >= 90 et Ancienneté >= 5 ans : Excellente
// Score >= 75 et Ancienneté >= 3 ans : Bonne
// Score >= 50 et Ancienneté < 3 ans : Satisfaisante
// Score < 50 : Insuffisante
// Ajoutez un bonus si des récompenses ont été reçues : 10% pour une récompense, 20% pour deux ou plus.

const prompt = require("prompt-sync")();
const score = Number(prompt("Entrer le score : "));
const anciennete = Number(prompt("Entrer l anciennete en annees : "));
const recompenses = Number(prompt("Recompenses (0, 1, 2) : "));

let evaluation;
let bonus = 0;
if (score >= 90 && anciennete >= 5) {
    evaluation = "Excellente";
} else if (score >= 75 && anciennete >= 3) {
    evaluation = "Bonne";
} else if (score >= 50 && anciennete < 3) {
    evaluation = "Satisfaisante";
} else if (score < 50) {
    evaluation = "Insuffisante";
} else {
    evaluation = "Conditions non remplies";
}
if (recompenses === 1) {
    bonus = 10;
} else if (recompenses === 2) {
    bonus = 20;
}
console.log("evaluation : " + evaluation);
console.log("Bonus : " + bonus);