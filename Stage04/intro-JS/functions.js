/* 
    FUNÇÕES
    
    Funções servem para dar significado para um código, agrupar códigos e reutilizar códigos de forma mais simplificada.
*/


/*---- begin of part 1

//criar aplicativo de frases motivacionais

//function declaration (declaração da função)
function createPhrases(){
    console.log('Estudar é muito bom');
    console.log('Paciência e persistência');
    console.log('Revisão é a mãe do aprendizado');
}


//execute function(executar a função)
createPhrases();

---- end of part 1 */


/*---- begin of part 2

//function expression or function anonymous (função sem um nome) (nesse caso number 1 e number2 respectivamente)
// parâmeters (parâmetros) é o que vai dentro dos parênteses da função, são "variáveis" que recebem o valor passado ao executar a função.
const sum = function(number1, number2){
    console.log(number1 + number2);
    
}

sum(2, 3);//arguments(argumentos) são os valores passados dentro dos parênteses ao executar a função(nesse caso 2 e 3 respectivamente)

---- end of part 2 */


/*---- begin of part 3

const sum = function(number1, number2){
   let  total = number1 + number2;

    return total;
}

let x = 2;
let y = 3
sum(x, y);//arguments(argumentos) também podem ser passados utilizando variáveis, mas o que será passado são seus valores.

console.log(`O valor de X é ${x}`);
console.log(`O valor de Y é ${y}`);
console.log(`O valor de X + Y é: ${sum(x, y)}`);//caso não haja um "return" dentro da função "sum()" esse console.log retornará "O valor de X + Y é: undefined" pois ele está apenas executando a função;

//console.log(total); //isso pode funcionar caso a variável total dentro da função sum() não tenha let, var ou const, mas não é uma boa prática usar a variável dessa forma, pois pode dar problema já que a variável começa a existir fora do escopo da função e pior ainda se já existir uma variável "total" fora da função.

---- end of part 3 */

/*---- begin of part 4
//função para fazer vitamina

function fazerVitamina(fruta1, fruta2){
    return fruta1 + ' com ' + fruta2;
}

const copo = fazerVitamina('banana', 'abacate');

console.log(`O copo contém vitamina de ${copo}`);

---- end of part 4 */


/*---- begin of part 5

//function scope
let subject = 'create video';

function createThink(subject){
    subject = 'study';
    return subject;
}

console.log(subject); // aqui será escrito "create video" no console.log, pois está usando o valor fora do escopo da função createThink()
console.log(createThink); // aqui será escrito "study", pois está usando o valor retornado pela função createThink()

//OBS: caso não exista a variável "subject" como parâmetro na função createThink o valor "study" será aplicado também fora da função, pois assim a função usará uma variável com nome "subject" que exista fora do escopo.

---- end of part 5 */



/*---- begin of part 6
// function hosting

sayMyName(); //a função sofrerá um hosting pois é como se o JS jogasse as funções para o começo do código.

function sayMyName(){
    console.log('Michael');
}
//----------
sayMyName2()// aqui não sofrerá um hosting pois é uma função de expessão(expression função)

const sayMyName2 = function(){
    console.log('Michael');
}

---- end of part 6 */


/*---- begin of part 7
//arrow function é como se fosse uma função de expressão mais compacta utilizando o "=>" entre os parênteses e as chaves, geralmente atribuída para uma const.

const sayMyName = () => {
    console.log('Michael');
}

sayMyName();

---- end of part 7 */



/*---- begin of part 8
// callback function (chamar de volta a função - exemplo: chamar uma função como parâmetro em outra função)

function sayMyName(name){
    console.log('antes de executar a função callback');
    
    name(); //aqui está executando a função que foi passada na execução da sayMyName, por isso precisa de "()"
    
    console.log('depois de executar a função callback');

}

sayMyName( //não precisa ser obrigatoriamente uma arrow function
    () => {
        console.log('Estou em uma callback');
    }
);

---- end of part 8 */


/*
    function() constructor

    * expressão new
    * criar um novo objeto
    * this keyword
*/

function Person(name){ //criando um novo constructor com nome Person que está recebendo o argumento que for passado para o parâmetro "name"
    this.name = name // é necessário usar o this em um constructor, onde this.name receberá o valor de name nesse caso.
    this.walk = function() {
        return this.name + ' está andando';
    }
}

const mayk = new Person('Mayk'); //criando uma nova 'mayk' utilizando os atributos do constructor Person. (a palavra new é obrigaória para indicar que será criado esse objeto a partir do constructor Person)
const michael = new Person('Michael');

console.log(mayk.walk());
console.log(michael.walk());



let date = new Date("2020-12-01"); //usar a primeira letra maiúscula em um construtor não é obrigatório, mas é uma boa prática pois já existem funções construtoras já no JS como Date, String, etc.
console.log(date);





