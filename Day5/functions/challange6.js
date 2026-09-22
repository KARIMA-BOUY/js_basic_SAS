// Challenge 6 : Fonction de Fibonacci
// Écrivez une fonction JavaScript qui calcule le n-ième terme de la suite de Fibonacci. La fonction doit prendre un entier en paramètre et retourner le n-ième terme. 
// Utilisez cette fonction pour afficher le terme de Fibonacci demandé.

function Fibonacci(n){
   if(n==0) return 0;
   if(n==1)return 1;
   let a=0;
   let b=1;
   for(let i=0;i<n;i++){
    const result=a+b;
    a+b;
    b=result;
   }
   return b;
}console.log(Fibonacci(0));





