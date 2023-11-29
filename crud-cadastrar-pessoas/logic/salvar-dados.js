function salvar(){
	pessoas = JSON.parse(localStorage.getItem('pessoas')) || [] // pega o que tem local

	nome = $("#name").val() // pega o valor do input JQUERY
	idade = $("#age").val() // pega o valor do input JQUERY
	peso = $("#weigth").val() // pega o valor do input JQUERY
	
	item = {nome, peso, idade} // criando o objeto

	status =  $("#salvar-btn").text()

	if(status == "Salvar"){
		pessoas.push(item) // colocando objeto no array
	}else{
		id = $("#index").val() // aqui pego o id que foi adicionado na chamada o editar
		pessoas[id] = item  // substitui no array o item existente pelo novo item que foi editado
	}

	if($("#name").val() != "" && $("#age").val() != "" && $("#weigth").val() != ""){
		localStorage.setItem("pessoas", JSON.stringify(pessoas)) // armazenando local
		monteTabela()
		$("form").trigger("reset")
		$("#salvar-btn").text("Salvar") // muda o valor do botão de Salvar para Editar
		setTimeout(()=>{
			$("form").removeClass("was-validated")
		},1)

	}

	
}