
const prompt = require("prompt-sync")();
let revenu = Number(prompt("Entrer le revenu annuel: "));
let score = Number(prompt("Entrer le score de crrdit : "));
let duree = Number(prompt("Entrer la durée du pret : "));

if (revenu >= 30000 && score >= 700 && duree <= 10) {
    console.log("eligible");
}
else if (revenu >= 30000 && score >= 650 && duree <= 15) {
    console.log("Éligible avec conditions");
}
else {
    console.log("Non éligible");
}