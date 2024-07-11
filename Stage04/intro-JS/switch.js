// SWITCH
//caso o valor recebido na expressão seja 'a' o programa fará o que estiver dentro do "case 'a'"
//caso o valor recebido na expressão seja 'b' o programa fará o que estiver dentro do "case 'b'"
//caso o valor recebido na expressão não seja 'a' e nem 'b' o programa fará o que estiver dentro do "default"
/*
	switch(expression) {
		case 'a' :
			//codigo para expressao a
			console.log('a');
			break;
		
		case 'b' :
			//codigo para a expressao b
			console.log('b');
			break;

		default :
			console.log('default');
			break;
*/


function calculate(number1, operator, number2) {
    let result = 0;

    switch (operator) {

        case '+':
            result = number1 + number2;
            break;
        case '-':
            result = number1 - number2; 
            break;
        case '*':
            result = number1 * number2;
            break;
        case '/':
            result = number1 / number2 ;
            break;
        default:
            console.log('não implementado');
            break;
    }

    return result;
}

console.log(calculate(4, '%', 8)); // aqui retornará "não implementado" por não ter um case para ele

console.log(calculate(4, '*', 8)); // aqui retornará o "result" de 32, pois existe um "case" para o operador "*" de multiplicação