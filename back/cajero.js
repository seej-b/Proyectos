document.getElementById('metodo').addEventListener('change', function () {
    const metodo = this.value;
    const claveInput = document.getElementById('clave');
    const codigoInput = document.getElementById('codigo');
    const labelClave = document.getElementById('label-clave');
    const labelCodigo = document.getElementById('label-codigo');

    if (metodo === '1') {
        claveInput.style.display = 'block';
        labelClave.style.display = 'block';
        codigoInput.style.display = 'none';
        labelCodigo.style.display = 'none';
    } else if (metodo === '2') {
        codigoInput.style.display = 'block';
        labelCodigo.style.display = 'block';
        claveInput.style.display = 'none';
        labelClave.style.display = 'none';
    } else {
        claveInput.style.display = 'none';
        codigoInput.style.display = 'none';
    }
});

document.getElementById('atm-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const SALDO_INICIAL = 2193000;
    let intentos = 3;
    let saldo = SALDO_INICIAL;

    const banco = document.getElementById('banco').value;
    const metodo = document.getElementById('metodo').value;
    const monto = parseInt(document.getElementById('monto').value, 10);
    const clave = document.getElementById('clave').value;
    const codigo = document.getElementById('codigo').value;
    const resultado = document.getElementById('resultado');

    resultado.innerHTML = '';  

    if (isNaN(monto) || monto <= 0) {
        resultado.innerHTML = `<p class="error">Por favor, ingrese un monto válido.</p>`;
        return;
    }

    if (monto > saldo) {
        intentos--;
        resultado.innerHTML = `<p class="error">Saldo insuficiente. Intentos restantes: ${intentos}</p>`;
        if (intentos === 0) {
            resultado.innerHTML = `<p class="error">Ha excedido el número máximo de intentos. Intente más tarde.</p>`;
            return;
        }
        return;
    }

    if (metodo === '1') {
        if (clave == '2024') {
            intentos--;
            resultado.innerHTML = `<p class="error">Clave incorrecta. Intentos restantes: ${intentos}</p>`;
            if (intentos === 0) {
                resultado.innerHTML = `<p class="error">Ha excedido el número máximo de intentos. Intente más tarde.</p>`;
                return;
            }
            return;
        }
    } else if (metodo === '2') {
        if (codigo.trim() === '') {
            resultado.innerHTML = `<p class="error">Por favor, ingrese su código de seguridad.</p>`;
            return;
        }
    }

    saldo -= monto;
    resultado.innerHTML = `<p class="success">Retiro exitoso de ${monto} pesos. Su saldo actual es: ${saldo} pesos.</p>`;
    
    document.getElementById('atm-form').reset();
    document.getElementById('clave').style.display = 'none';
    document.getElementById('codigo').style.display = 'none';
    document.getElementById('label-clave').style.display = 'none';
    document.getElementById('label-codigo').style.display = 'none';
});
