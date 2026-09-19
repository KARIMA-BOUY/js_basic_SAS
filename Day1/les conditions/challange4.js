
const prompt = require("prompt-sync")();
const a = Number(prompt("Entrer a : "));
const b = Number(prompt("Entrer b : "));
const c = Number(prompt("Entrer c : "));

const delta = b ** 2 - 4 * a * c;
if (delta > 0) {
    const x1 = (-b - Math.sqrt(delta)) / (2 * a);
    const x2 = (-b + Math.sqrt(delta)) / (2 * a);
    console.log("Deux solutions :");
    console.log("x1 =", x1);
    console.log("x2 =", x2);

} else if (delta === 0) {
    const x = -b / (2 * a);
    console.log("Une seule solution :");
    console.log("x =", x);

} else {
    console.log("Pas de solution");
}