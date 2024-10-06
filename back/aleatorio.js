const numAleatorio = Math.floor(Math.random() * 100) + 1;
console.log(numAleatorio);

document.getElementById('guess-btn').addEventListener('click', function() {
    const num = parseInt(document.getElementById('user-input').value);
    const messageEl = document.getElementById('message');

    if (isNaN(num) || num < 1 || num > 100) {
        messageEl.textContent = "Por favor, ingresa un número válido entre 1 y 100.";
        return;
    }

    if (num > numAleatorio) {
        messageEl.textContent = "Número incorrecto. Pista: el número es menor.";
    } else if (num < numAleatorio) {
        messageEl.textContent = "Número incorrecto. Pista: el número es mayor.";
    } else {
        messageEl.textContent = "¡Acertaste! El número era " + numAleatorio;
        messageEl.style.color = "#28a745";
    }
});
