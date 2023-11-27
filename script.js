function determinarSigno() {
    var dia = parseInt(document.getElementById('dia').value);
    var mes = parseInt(document.getElementById('mes').value);
    var resultadoElement = document.getElementById('resultado');

    if (dia >= 1 && dia <= 31 && mes >= 1 && mes <= 12) {
        var signo;

        // Lógica de determinación del signo zodiacal...

        resultadoElement.textContent = 'Tu signo del zodiaco es: ' + signo;
    } else {
        resultadoElement.textContent = 'Ingresa una fecha válida.';
    }
}
