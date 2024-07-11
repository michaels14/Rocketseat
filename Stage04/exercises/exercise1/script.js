let num1, num2;

num1 = Number(prompt('Insira o primeiro número: '));
num2 = Number(prompt('Insira o segundo número: '));
sum = num1 + num2;
sub = num1 - num2;
mult = num1 * num2;
div = num1 / num2;
alert(`A soma de ${num1} e ${num2} é: ${sum}`);
alert(`A subtração de ${num1} e ${num2} é: ${sub}`);
alert(`A multiplicação de ${num1} com ${num2} é: ${mult}`);
alert(`A divisão de ${num1} por ${num2} é: ${div}`);

if(sum%2 == 0){
    alert(sum + ' é par');
}else{
    alert(sum + ' é ímpar');
}


if(num1 == num2){
    alert('Os dois números são iguais!');
}else{
    alert('Os dois números são diferentes!');
}

