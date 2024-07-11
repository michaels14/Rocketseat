/*
    AVANÇANDO COM VARIÁVEL
*/


//Variáveis e tipos de dados
    
    var name; //declaração ou decleration

    name = "Michael";//assignment or atribuição de valores

    console.log(name); // mostra no console o valor da variável name

    console.log(typeof name); //mostra no sole o tipo de dado colocado na variável name


    let age, isHuman //variáveis diversas podem ser declaradas em apenas uma linha

    age = 22;
    isHuman = true;

    console.log(name, age, isHuman) // para mostrar o valor de diversas variáveis é necessário como uma vírgula entre elas (múltiplos argumentos na função)

    console.log('O ' + name + ' tem ' + age + ' anos');// aqui estamos unindo string com os valores de uma variável, ao concatenar com "+" o resultado é uma string total com os valores das variáveis. Se alterarmos os valores das variáveis, o JS aplicará essa alteração.

    console.log(`O ${name} tem ${age} anos`); //aqui estamos unindo uma string com os valores de uma variável, porém usando a interpolação com o template literals or template strings aplicada pela crase `` onde as variáveis ficam entro de " ${} "


