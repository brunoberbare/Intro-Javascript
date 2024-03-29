var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function (event) {
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");

    var paciente = obtemPacienteDoFormulario(form);

	var erros = validaPaciente(paciente);

	if (erros.length > 0) {

		exibeMensagemDeErro(erros);

		return;
	}

    adicionaPacienteNaTabela(paciente);

	var ulErro = document.querySelector("#mensagem-erro");
	ulErro.innerHTML = "";

    form.reset();
});

function adicionaPacienteNaTabela(paciente) {
	var pacienteTr = montaTr(paciente);
	var tabela = document.querySelector("#tabela-pacientes");
	tabela.appendChild(pacienteTr);
}

function obtemPacienteDoFormulario(form) {

    var paciente = {
           nome: form.nome.value,
           peso: form.peso.value,
         altura: form.altura.value,
        gordura: form.gordura.value,
            imc: calculaImc(form.peso.value, form.altura.value)
    }
    return paciente;
}

function montaTd(dado, classe) {

    var td = document.createElement("td");
    td.classList.add(classe);
    td.textContent = dado;

    return td;
}

function montaTr(paciente) {

    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function validaPaciente(paciente) {

	var erros = [];

	if (paciente.nome.length == 0) {
		erros.push("O nome está em branco!")
	}
	if (paciente.peso.length == 0) {
		erros.push("O peso está em branco!")
	} else if (!validaPeso(paciente.peso)) {
		erros.push("Peso Inválido!");
	}
	if (paciente.altura.length == 0) {
		erros.push("A altura está em branco!")
	} else if (!validaAltura(paciente.altura)) {
		erros.push("Altura Inválida!");
	}
	if (paciente.gordura.length == 0) {
		erros.push("A gordura corporal está em branco!")
	}
	return erros;
}

function exibeMensagemDeErro(erros) {

	var ulErro = document.querySelector("#mensagem-erro");
	ulErro.innerHTML = "";

	for (erro of erros) {
		var liErro = document.createElement("li");
		liErro.textContent = erro;

		ulErro.appendChild(liErro);
	}
}
