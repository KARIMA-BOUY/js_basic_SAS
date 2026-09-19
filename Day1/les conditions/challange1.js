const prompt=require("prompt-sync")();
const nomber=prompt("entrer la valeur de nombre ");
if(nomber%2==0){
    console.log("votre nomber est pair" );
}else{
    console.log("votre nomber est impair")
}
