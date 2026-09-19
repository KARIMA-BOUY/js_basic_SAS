const prompt=require("prompt-sync")();
const nom=prompt("entrer votre nom :");
const prenom=prompt("entrer votre prenom:");
const age=prompt("entrer votre age :");
const sexe=prompt("entrer votre sexe:");
const address=prompt("entrer votre adress:");
console.log(` mon nom et prenom c est ${nom} ${prenom} mon age ${age} et je suis ${sexe} et aussi mon email c est ${address}`);
