function monteTabela(){
	pessoas = pegaDados()
	let lista = ""
	for(let [i, p] of pessoas.entries()){
		lista += 
			`
	 <tr>
					<th scope="row">${i}</th>
					<td>${p.nome}</td>
					<td>${p.idade}</td>
					<td>${p.peso}</td>
					<td>
						<button type="button" onclick="editar(${i})" class="btn btn-primary">Editar</button>
						<button type="button" onclick="deletar(${i})" class="btn btn-danger">Excluir</button>
					</td>
				</tr>
	 `
	}
	document.getElementById("tabela").innerHTML = lista // JS PURO
	$("#tabela").html(lista) //JQUERY
}

monteTabela()