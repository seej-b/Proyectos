// Función principal del programa
function calcular() {

    var nombre = prompt("¡Bienvenido! Por favor ingresa tu nombre:");

    // Pedir al usuario la operación deseada
    var operacion = prompt("¿Qué operación desea realizar? (suma, resta, multiplicacion, division)");

    if (isNaN(operacion != "suma", "resta", "multiplicacion", "division")){
        alert("Tipo de operación no válida, por favor ingrese la operación que desea realizar (suma, resta, multiplicacion, division)");
        return;
    }

    // Pedir al usuario la cantidad de números con los que quiere operar
    var cantidadNumeros = parseInt(prompt("¿Cuántos números quiere operar? (de 2 a 5)"));

    // Validar que la cantidad de números esté dentro del rango permitido
    if (cantidadNumeros < 2 || cantidadNumeros > 5 || isNaN(cantidadNumeros)) {
        alert("La cantidad de números debe ser un número entre 2 y 5.");
        return;
    }

    // Pedir al usuario los números con los que quiere operar
    var numeros = [];
    for (var i = 0; i < cantidadNumeros; i++) {
        var numero = parseInt(prompt("Ingrese el número " + (i + 1) + ":"));
        if (isNaN(numero)) {
            alert("Debe ingresar un número válido.");
            return;
        }
        numeros.push(numero);
    }

    // Realizar la operación seleccionada
    var resultado;
    switch (operacion) {
        case "suma":
            resultado = 0;
            for (var i = 0; i < numeros.length; i++) {
                resultado += numeros[i];
            }
            break;
        case "resta":
            resultado = numeros[0];
            for (var i = 1; i < numeros.length; i++) {
                resultado -= numeros[i];
            }
            break;
        case "multiplicacion":
            resultado = 1;
            for (var i = 0; i < numeros.length; i++) {
                resultado *= numeros[i];
            }
            break;
        case "division":
            resultado = numeros[0];
            for (var i = 1; i < numeros.length; i++) {
                resultado /= numeros[i];
            }
            break;
        default:
            alert("Operación no válida.");
            return;
    }

    // Mostrar el resultado
    alert("El resultado de la " + operacion + " es: " + resultado + " Gracias " + nombre + " por utilizar el programa.");
}

// Llamar a la función principal
calcular();



