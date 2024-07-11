// for...of - usado para receber um elemento por vez de uma variável, array, etc..

let name = 'Michael'

for(let char of name){
	console.log(char);// Imprimirá cada caracter do nome de forma separada e entrará no looping do for para cada caracter até acabar.

//obs: M -- i -- c -- h -- a -- e -- l
}



let names = ['João', 'Paulo', 'Pedro']

for(let name of names){
	console.log(name); // como é um array, aqui imprimirá cada nome ou elemento dentro do array até acabar os elementos.

//obs: João -- Paulo -- Pedro
}