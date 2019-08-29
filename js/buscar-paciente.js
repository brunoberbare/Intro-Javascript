var botaoAdicionar = document.querySelector("#buscar-paciente");

botaoAdicionar.addEventListener("click", function() {

	var xhr = new XMLHttpRequest();

	xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

	xhr.addEventListener("load", function() {

		var erroBuscarPaciente = document.querySelector("#erro-buscar-paciente");

		if (xhr.status == 200) {
			erroBuscarPaciente.classList.add("invisivel");
			var resposta = xhr.responseText;
			var pacientes = JSON.parse(resposta);

			for (paciente of pacientes) {
				adicionaPacienteNaTabela(paciente);
			}
		} else {
			console.log(xhr.status);
			console.log(xhr.responseText);

			erroBuscarPaciente.classList.remove("invisivel");
		}

	});

	xhr.send();
});
