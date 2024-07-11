//CONTROL FLOW

/*
console.log('a');
console.log('b'); //fluxo normal lendo linha a linha, primeira a linha anterior e depois essa
*/


// if...else

/*
	if(true) {
 		//se verdadeiro faça isso
	} else {
 		//se falso faça isso
	}
*/

let temperature = 37.8;

if(temperature >= 37.5){
	console.log('febre alta'); //se a temperatura for maior que 37.5 retornará isso
} else if(temperature >= 37){
	console.log('febre moderada'); //se a temperatura for maior que 37 retornará isso
} else {
	console.log('saudável'); //se a temperatura for abaixo de 37 retornará isso
}

/*
 também é possível fazer isso atribuindo um true ou false para uma variável específica, por exemplo:

let temperature 37.4
let highTemperature = temperature >= 37.5; //nesse exemplo aqui retorna false
let mediumTemperature = temperature < 37.5 && temperature >= 37 //nesse exemplo aqui retorna true

if(highTemperature){
	console.log('febre alta'); //se a temperatura for maior que 37.5 retornará isso
} else if(mediumTemperature){
	console.log('febre moderada'); //se a temperatura for maior que 37 retornará isso
} else {
	console.log('saudável'); //se a temperatura for abaixo de 37 retornará isso
}
*/



