function pegaDados(){
	dados = JSON.parse(localStorage.getItem('pessoas')) || [] 
	return dados
}