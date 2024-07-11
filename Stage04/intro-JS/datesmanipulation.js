/* 
    Prototype
    
    * js pode ser considerado uma prototype-based language
    * prototype chain
    * __proto__

    Qualquer variável criada adquiri as propriedades do __proto__ que possui funcionalidades que podem ser utilizada nativas do JavaScript.
*/


/* ---- begin of part 1
console.log("Michael".__proto__); //retorna que o valor é uma String e todos as propriedades que existem nele e nas propriedades do __proto__

console.log(23.0.__proto__); // retorna que o valor é Number e também a cadeia dele com o __proto__

console.log("Michael".length); // é uma da propriedades do __proto__ e essa length retorna a quantidade de caracteres na string passada.

//Obs: Coloque um valor e um "." na frente para ver várias propriedades que existem nativas no JS vindas do __proto__
 ---- end of part 1 */


 /* ---- begin of part 2
    //Type conversion(typecasting)(Dev altera o tipo da variável por meio de uma função) vs Type coersion(JS altera o tipo da variável quando duas variáveis de tipos diferentes são usadas juntas)

    //*Alteração de um tipo de dado para outro tipo
    

    console.log("9" + 5); // retorna a string "95", pois o JS altera o number para string automaticamente.
    
    console.log(Number("9") + 5); // retorna 14, pois foi usada a função "Number()" para alterar o tipo da string "9".

    let string = "123"
    console.log(Number(string)); // retorna 123 na tonalidade azul por ser um number

    let number = 321
    console.log(String(number)); // retorna 321 na tonalidade branca por ser uma string
 ---- end of part 2 */


 
 /* ---- begin of part 3
 //Manipulando Strings, Numbers e Arrays
 
 //Contar quantos caracteres tem em uma palavra de quantos dígitos tem um número
 let word = "Paralelepipedo";
 console.log(word.length); // retorna que tem 14 caracteres na variável "word". Não é possível usar diretamente em uma variável do tipo Number.
 
 let number = 1234
 console.log(String(number).length); // retorna que tem 4 caracteres.
 
 
 // Transformar um número quebrado com 2 casas decimais e trocar ponto por vírgula.
 let float = 345.124234
 console.log(float.toFixed(2).replace('.',',')); // .toFixed altera o máximo de casas decimais para 2 e .replace está trocando o ponto por uma vírgula. Essas funções podem ser utilizadas uma após a outra, sempre será utilizado na próxima função o que vier do resultado da anterior. TANTO O .toFixed QUANTO O .replace RETORNAM UMA STRING.
 
 
 // Transforme letras minúsculas em maiúsculas e tambémf faça o contrário
 let phrase = "Programar é muito bacana";
 console.log(phrase.toUpperCase()); //todas as letras ficam em maiúscula
 console.log(phrase.toLowerCase()); //todas as letras ficam em minúscula
 
 //Separe um texto que contém espaços, em um novo array onde cada texto é uma posição do array. Depois disso, transforme o array em um texto e onde eram espaços coloque _
 let text = "Eu quero viver o Amor!"
 let myArray = text.split(" "); // cria um array com cada uma das palavras em uma posição. O split separa as posições com base nos espaços.
 
 console.log(myArray);
 
 let textWithUnderscore = myArray.join("_"); // retorna uma string juntando todas as palavras do Array com um _ : Eu_quero_viver_o_Amor!
 console.log(textWithUnderscore);
 
 
 //Verificar se o texto contém a palavra Amor
 let phrase2 = "Eu quero viver!";
 console.log(phrase2.includes("Amor")); // retorna false pois não tem a palavra Amor
 
 phrase2 = "Eu quero viver o Amor!";
 console.log(phrase2.includes("Amor")); // retorna true pois tem a palavra Amor (OBS: essa função é CaseSensitive, se fosse "amor" retornaria false);
 
 
 //Criar Array com Constructor
 let myArray2 = new Array("a", "b", "c"); // cada elemento virará um elemento no Array
 console.log(myArray2);
 
 let myArray3 = new Array(10) // cria 10 posições vazia no Array
 console.log(myArray3);
 
 
 //Contar elementos de um array
 console.log(["a", "b", "c"].length);// retorna 3 pois é a quantidade de posições no Array
 
 
 //Transformar uma cadeia de caracteres em elementos de um Array.
 let word2 = "Manipulação";
 console.log(Array.from(word2)); //Array é um objeto nativo do JS que pode usar o método .from que tem como argumento uma string, esse método transforma toda a cadeia de caracteres(string) em elementos de um Array.
 ---- end of part 3 */
 
 
 /* ---- begin of part 4
 //Exercícios de manipulação de Array
 
 let techs = ["html", "css", "js"];
 
 //adicionar um item no fim
 techs.push("nosejs");//o método .push automaticamente adiciona o elemento no final do Array.
 
 //adicionar um item no começo
 techs.unshift("sql");
 
 //remover um item do fim
 techs.pop();
 
 //remover um item do começo
 techs.shift();
 
 //pegar somente alguns elementos do Array; --não altera Array
 console.log(techs.slice(1, 3)) // tira o elemento na posição 1(aqui conta a partir do 0) até o elemento na posição 3(aqui não conta a partir do 0);
 
 //remover 1 ou mais itens em qualquer posição do Array; --altera Array
 //techs.splice(1, 2); // 1 é o índex de qual elemento deseja remover e 2 é quantos elementos a partir desse deseja remover. (removerá "css" e "js");
 
 //encontrar a posição de um elemento no Array
 let index = techs.indexOf("css");
 techs.splice(techs, 1) //remove o elemento da posição 1 já que é a o valor atribuído à variável index.
 console.log(index)
 
 console.log(techs);
 ---- end of part 4 */
 
 


