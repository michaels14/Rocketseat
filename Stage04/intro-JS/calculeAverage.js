/* 
    Encontre uma solução ao problema:
*/


/* Exercício 1
// Pergunte o nome do usuário e escreva a mensagem: "Olá, [nome do usuário]";

let userName = prompt('Qual é o seu nome?'); //prompt serve para apresentar uma caixa de mensagem contendo um input que nesse caso retornará o valor para a variável userName

alert('Olá, ' + userName); //alert serve para apresentar uma caixa de mensagem ao usuário com o conteúdo dentro dos parênteses.
*/
 

/* Exercício 2
// Solicite 2 números, faça a soma deles e apresente o resultado final ao usuário
let numberOne, numberTwo, result;

alert('Vamos somar dois números!!');
numberOne = prompt('Digite o primeiro número');
numberTwo = prompt('Digite o segundo número');
result = Number(numberOne) + Number(numberTwo); //foi utilizado a função Number() pois o prompt retorna uma String, logo numberOne + numberTwo seria "1020", por isso alteramos para number para poder fazer a soma e não concatenação.
alert(`O resultado final da soma de ${numberOne} com ${numberTwo} é: ${result}`);
*/


/* Exercício 3
// Capturar dois números e fazer as operações matemáticas de soma, subtração, multiplicação, divisão e resto da divisão. E para cada operação mostrar um alerta com o resultado.

let firstNumber, secondNumber;

alert('Vamos calcular dois números!!');
firstNumber = prompt('Digite o primeiro número');
secondNumber = prompt('Digite o segundo número');

alert(`O resultado final da soma de ${firstNumber} com ${secondNumber} é: ${Number(firstNumber) + Number(secondNumber)}`);
alert(`O resultado final da subtração de ${firstNumber} com ${secondNumber} é: ${Number(firstNumber) - Number(secondNumber)}`);
alert(`O resultado final da multiplicação de ${firstNumber} com ${secondNumber} é: ${Number(firstNumber) * Number(secondNumber)}`);
alert(`O resultado final da divisão de ${firstNumber} com ${secondNumber} é: ${Number(firstNumber) / Number(secondNumber)}`);
alert(`O resultado final do resto divisão de ${firstNumber} com ${secondNumber} é: ${Number(firstNumber) % Number(secondNumber)}`);
*/



// Solicitar o nome do aluno e suas 3 notas do bimestre. Calcule a média daquele aluno.
// Se o aluno passou no bimestre, dar os parabéns.
// Se o aluno não passou no bimestre, motivar o aluno a dar seu melhor na prova de recuperação.
// Em ambos os casos, mostre uma mensagem com o nome do aluno e a nota.

/* FORMA MAIS SIMPLES DE FAZER
let studentName, firstGrade, secondGrade, thirdGrade, average;

alert('Vamos calcular sua média no bimestre!');

studentName = prompt('Qual é o seu nome?');

firstGrade = prompt('Qual é a sua primeira nota no bimestre?');
secondGrade = prompt('Qual é a sua segunda nota no bimestre?');
thirdGrade = prompt('Qual é a sua terceira nota no bimestre?');

average = Number(firstGrade) + Number(secondGrade) + Number(thirdGrade);
average /= 3;

if(average >= 6.0){
    alert(`Parabéns ${studentName}!! Sua média é ${average.toFixed(2)}, você está APROVADO!! Continue assim.`)
} else {
    alert(`Que pena ${studentName}... sua média é ${average.toFixed(2)}, mas não se desanime, estude para a prova de recuperação e dará tudo certo!!`)
}
*/

let studentName, average, gradeSum;

gradeSum = []; // transforma gradeSum em um array.

alert('Vamos calcular sua média no bimestre!');

studentName = prompt('Qual é o seu nome?');

gradeSum = prompt('Digite as suas notas do bimestre separando por espaço ').split(' '); //.split para separar os dados por espaço e colocar cada nota em um posicionamento do Array

function calculeAverage(){
    let aux = 0;
    for(let i = 0; i < gradeSum.length; i++){
        aux += Number(gradeSum[i]);
    }
    return aux / gradeSum.length;
}

average = calculeAverage();
averageFixed = average.toFixed(2);

if(average >= 8.0){
    alert(`Parabéns ${studentName}!! Sua média é ${averageFixed}, você está APROVADO!! Continue assim.`)
} else if(average >= 6.0){
    alert(`Parabéns ${studentName}! Sua média é ${averageFixed}, você está aprovado! Continue estudando e se sairá ainda melhor no próximo bimestre!`)
} else {
    alert(`Que pena ${studentName}... sua média é ${averageFixed}, mas não se desanime, estude para a prova de recuperação e dará tudo certo!!`)
}



