var titulo = document.querySelector(".titulo");

titulo.textContent = "Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for (paciente of pacientes) {

    var peso = paciente.querySelector(".info-peso").textContent;
    var altura = paciente.querySelector(".info-altura").textContent;
    var tdImc = paciente.querySelector(".info-imc");

    var flagPeso = validaPeso(peso);
    var flagAltura = validaAltura(altura);

    if (!flagPeso) {
        tdImc.textContent = "Peso inválido!";
        paciente.classList.add("paciente-invalido");
    }

    if (!flagAltura) {
        tdImc.textContent = "Altura inválida!";
        paciente.classList.add("paciente-invalido");
    }

    if (flagPeso && flagAltura) {
        tdImc.textContent = calculaImc(peso, altura);
    }
}

function validaPeso(peso) {
	if (peso > 0 && peso < 1000) {
		return true;
	} else {
		return false;
	}
}

function validaAltura(altura) {
	if (altura > 0 && altura < 3) {
		return true;
	} else {
		return false;
	}
}

function calculaImc (peso, altura) {
    var imc = 0;
    imc = peso / (altura * altura);
    return imc.toFixed(2);
}
