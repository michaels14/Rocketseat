// for...in --- cria um looping usando um objeto, puxando as propriedades dele


let person = {
	name: 'John',
	age: 30,
	weight: 88.6
}

for(let property in person){
	console.log(property); // imprime cada propriedade do objeto person. obs: name -- age -- weight.
}