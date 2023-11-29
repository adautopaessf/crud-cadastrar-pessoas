function editar(id){
	pessoas = pegaDados()
	

	$("#salvar-btn").text("Editar") // muda o valor do botão de Salvar para Editar
	
	$("#index").val(id) // adicioanar ao input oculto o valor do id JQUERY
	nome = $("#name").val(pessoas[id].nome) // pega o valor do input JQUERY
	idade = $("#age").val(pessoas[id].idade) // pega o valor do input JQUERY
	peso = $("#weigth").val(pessoas[id].peso) // pega o valor do input JQUERY
}