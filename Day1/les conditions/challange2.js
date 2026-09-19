const prompt=require("prompt-sync")();
const lettre=prompt("entrer une lettre:");
switch(lettre){
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
    case 'y':
        console.log(`la lettre ${lettre} est une voyelle`);
    break;
    default:
        console.log(`la lettre ${lettre} elle n est pas voyelle`);
}