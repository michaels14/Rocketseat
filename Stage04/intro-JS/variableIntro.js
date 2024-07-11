/* 
    Variáveis

    Nomes simbólicos para receber algum valor
    Atalhos de código
    Identificadores
    3 palavras reservadas para criar uma variável
        var - valor pode ser alterado (evitamos utilizar por ser uma variável global e funcionar em qualquer lugar do programa)
        let - valor pode ser alterado
        const - valor não pode ser alterado

    Fracamente tipada - linguágem dinâmica
        Não é necessário tipar, ou seja, dizer que a variável é do tipo string, int, boolean, etc; O próprio JS tipa a variável de acordo com a entrada,
        dessa forma se uma "let clima" recebe uma string ela é do tipo "string", se receber um valor inteiro ela é do tipo "int".


    JS é case-sensitive (sensível ao caso - maiúscula e minúsculas fazem diferença)
    JS aceita a cadeia de caracteres Unice(pode ser utilizados símbolos para criar variáveis)

    Posso:
        Iniciar variáveis com caracteres como $ e _;
        Iniciar com letras;
        Colocar acentos;
        Letras minúsculas e maiúsculas fazem diferença;

    Não posso:
        Iniciar com números;
        Colocar espaços vazios no nome;

    Ideal:
        Criar nomes que fazem sentido com o valor que será recebido;
        Que explique o que a variável faz;
        camelCase (nomes com mais de uma palavra coloque a primeira palavra com a primeira letra minúscula e as seguintes iniciando com letra maiúcula, como "nomeCliente");
        snake_case (nomes com mais de uma palavra coloque um underlide _ entre elas, como "nome_cliente");
        Escrever em inglês - ajuda em todos os sentidos, inclusive aprender inglês e ajudará caso seu código se torne universal em algum momento, como "clientName" ou "client_name"


*/ 

var clima = "Quente";

console.log(clima);

let temperatura = 39;

console.log(temperatura);

/*                */

clima = "Frio";

console.log(clima);

temperatura = 14;

console.log(temperatura);

/*                */

const medida = "grau";

//medida = "fahrenheit"

console.log(medida);

