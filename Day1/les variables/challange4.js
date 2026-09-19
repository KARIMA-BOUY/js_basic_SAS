const prompt=require("prompt-sync")();
const kmh=Number(prompt(" la vitesse en kilomètres par heure") );
let ms=kmh*0.27778;
console.log(` la transforme en mètres par seconde :${ms}(m/s)`);