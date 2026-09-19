const prompt=require("prompt-sync")();
let C=prompt(" ecrire la température en Celsius");
if(C<0){
    console.log("solide");
}else if(C >= 100){
    console.log("Gaz");
}else{
    console.log("liquide");
}