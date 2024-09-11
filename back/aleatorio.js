const numAleatorio = Math.floor(Math.random() * 100) + 1;
var num;
console.log(numAleatorio);

do{
    num = parseInt(prompt("¡Bienvenido a: Adivina el número! Por favor ingrese un número del 1 al 100:"));

    if (num >= numAleatorio && num !== numAleatorio){
        alert("Número incorrecto, intentelo nuevamente. Pista: El número que ingresaste es mayor que el número que tienes que adivinar.");
    }

    else if (num <= numAleatorio && num !== numAleatorio){
        alert("Número incorrecto, intentelo nuevamente. Pista: El número que ingresaste es menor que el numero que tienes que adivinar.");
    }

    if(num == numAleatorio){
        alert("¡Acertaste el número!: " + numAleatorio);
    }

}while(num !== numAleatorio);