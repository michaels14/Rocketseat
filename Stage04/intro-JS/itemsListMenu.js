/*
Nessa aula aprenderemos sobre:

Quais os dados de entrada que terei? (inputs)
Quais as variáveis?
Qual o caminho ideal? (fluxo ideal)
Qual(is) o(s) caminho(s) alternativo(s)? (fluxo alternativo)
Quais tratamentos de dados preciso fazer? (estrutura de dados, funções)
Qual é a saída, ou quais os dados de saída, esperada? (outputs)
Ferramentas da linguagem que abordaremos
[] loop while [] arrays e funções de arrays [] condicional if/else [] template literals (strings)
*/

/*

  Faça um programa que tenha um menu e apresente a seguinte mensagem:
  
  Olá usuário! Digite o número da opção desejada

    1. Cadastrar um item na lista
    2. Mostrar itens cadastrados
    3. Sair do programa
  
  --- 
  O programa deverá capturar o número digitado pelo usuário e mostrar o seguintes cenários:

  Caso o usuário digite 1, ele poderá cadastrar um item em uma lista
  Caso o usuário digite 2, ele poderá ver os itens cadastrados
    Se não houver nenhum item cadastrado, mostrar a mensagem: 
      "Não existem itens cadastrados"
  Caso o usuário digite 3, a aplicação deverá ser encerrada.

*/

let itemsList = [];
let option = 0;


while(option != 3){
    
    option = prompt(`Olá usuário! Digite o número da opção desejada
    1. Cadastrar um item na lista
    2. Mostrar itens cadastrados
    3. Remover um item cadastrado
    4. Sair do programa
    `);

    switch(option){
        case '1':
            let item = prompt('Digite o item: ');
            itemsList.push(item);
            break;

        case '2':
            if(itemsList.length == 0){
                alert('Não existem itens cadastrados');
            }else {alert('Itens Cadastrados : ' + itemsList);}  
            break;

        case '3':
            itemsList.pop();
            break;

        case '4':
            alert('Fim da aplicação!'); 
            break;

        default:
            alert('Opção inválida, tente novamente!');
    }
}