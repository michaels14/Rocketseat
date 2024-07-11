//throw - disparar / lançar

//try - tentar um bloco de código

//catch - capturar (um erro)


function sayMyName(name = '') {
	if (name ==='') {
		throw new Error("Nome é obrigatório"); //lançará esse mensagem no objeto do tipo "Error" para o catch caso o if seja true.
	}
	
	console.log('depois da função de erro');

	console.log(name);
}

try {
	sayMyName();
} catch(e) {
	console.log(e); //captura o que foi lançado pelo throw se a função no try anterior der "erro", ou seja, entrar no if que contém o throw
}

console.log('após a função de erro!')