document.getElementById('cantidadNumeros').addEventListener('input', function() {
    const cantidadNumeros = parseInt(this.value);
    const numerosContainer = document.getElementById('numeros-container');
    numerosContainer.innerHTML = '';

    for (let i = 0; i < cantidadNumeros; i++) {
        const input = document.createElement('input');
        input.type = 'number';
        input.placeholder = `Número ${i + 1}`;
        input.className = 'num-input';
        numerosContainer.appendChild(input);
    }
});

document.getElementById('calc-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const operacion = document.getElementById('operacion').value;
    const cantidadNumeros = parseInt(document.getElementById('cantidadNumeros').value);
    const numeros = Array.from(document.getElementsByClassName('num-input')).map(input => parseFloat(input.value));

    if (numeros.some(isNaN)) {
        alert('Por favor ingresa solo números válidos.');
        return;
    }

    let resultado;
    switch (operacion) {
        case "suma":
            resultado = numeros.reduce((acc, num) => acc + num, 0);
            break;
        case "resta":
            resultado = numeros.reduce((acc, num) => acc - num);
            break;
        case "multiplicacion":
            resultado = numeros.reduce((acc, num) => acc * num, 1);
            break;
        case "division":
            resultado = numeros.reduce((acc, num) => acc / num);
            break;
        default:
            alert("Operación no válida.");
            return;
    }

    document.getElementById('resultado').textContent = `El resultado de la ${operacion} es: ${resultado}. ¡Gracias, ${nombre}!`;
});
