var campoFiltro = document.querySelector("#filtro-tabela");

campoFiltro.addEventListener("input", function() {
	var pacientes = document.querySelectorAll(".paciente");

	if (this.value.length > 0) {
		for (paciente of pacientes) {
			var tdNome = paciente.querySelector(".info-nome");
			var nome = tdNome.textContent;

			var expressao = new RegExp(this.value, "i");

			if (!expressao.test(nome)) {
				paciente.classList.add("invisivel");
			} else {
				paciente.classList.remove("invisivel");
			}
		}
	} else {
		for (paciente of pacientes) {
			paciente.classList.remove("invisivel");
		}
	}
});
