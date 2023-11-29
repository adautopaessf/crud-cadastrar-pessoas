function deletar(id){ // passa o ID do item a ser deletado
	pessoas = pegaDados() // Chamando a função pegaDados e retornando os dados do localstorage"
	pessoas.splice(id,1) // Remove do aray pessoa que foi trazido do localstorage o item do indice passado na chamda deletar(id)
	localStorage.setItem("pessoas", JSON.stringify(pessoas)) // jogo dentro do localstorage o array pessoa sem o item deletado como string
	monteTabela() // Chama a função monteTaleba para recarregar os itens da tabela
}