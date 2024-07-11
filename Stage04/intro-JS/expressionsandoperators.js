/* Expressões e Operadores */


/* ---- begin of part 1

    -Expressions
    -Operators
        Binary
        Unary
        Ternary


let number = 1;

console.log(number + 1); //expressão com operarador binário

console.log(++number); //expressão com operarador unário

console.log(typeof number); //expressão com operarador unário

console.log(true ? 'alo' : 'nada') //expresão com operdor ternário

---- end of part 1 */


/* ---- begin of part 2
    new

    *left-hand-side expression
    *criar um novo objeto


    let name = new String("Michael");
    
    name.surName = "Lopes";
    
    let age = new Number(22);
    
    console.log(name, age); //retona a variável name e age com seus devidos objetos do tipo String e Number. com o name.surName é criado um elemento dentro da String "name" que contém o sobrenome "Lopes".
    
    let date = Date('2020-12-01');
    console.log(Date); // retorna o valor com a propriedades do objeto Name;
 ---- end of part 2 */

 
 /* ---- begin of part 3
    Operadores unários
    typeof
    delete



    console.log(typeof("Michael")); //retorna o tipo de dado que tem entre parênteses
    
    
    const person = {
        name : "Michael",
        age : 22
    }
    
    delete person.age; //deleta a propriedade "age" do objeto person;
    
    console.log(person);
---- end of part 3 */


 /* ---- begin of part 4
 //OPERADORES ARITIMÉTICOS
 
 //O operador de multiplicação é o * (asterisco);
 console.log(2*3);
 
 //O operador de divisão é a / (barra);
 console.log(6/2);
 
 //O operador de soma é o + (positivo);
 console.log(2+2);
 
 //O operador de subtração é o - (negativo).
 console.log(4-2);
 
 // resto da divisão: sinal % 
 let remainder
 remainder = 11 % 9 //retorna o que sobra, nesse caso 2
 console.log(remainder)
 
 // incremento: sinal ++ 
 let increment = 0
 console.log(++increment) // +1 antes de mostrar no console, se colocar increment-- irá incrementar só depois de mostrar no console.
 console.log(increment)
 
 // decremento: sinal -- 
 let decrement = 0
 decrement--
 console.log(decrement)
 
 // exponencial: sinal **
 console.log(2 ** 3)
 ---- end of part 4 */
 
 

  /* ---- begin of part 5
  GROUPING OPERATOR ( )  

    //Vamos falar sobre um operador que agrupa expressões, os parênteses.

    //Na matemática, temos uma noção de precedência, onde certos operadores têm de ser realizados primeiro, e não é diferente para um computador, porém, podemos utilizar os parênteses para realizar o agrupamento de alguns operadores, que moverá a precedência do cálculo.

    let total = 2 + 3 * 5
    console.log(total)
    //com essa precedência, nosso resultado é 17.

    let total = (2 + 3) * 5
    console.log(total)
    // o cálculo mudou a precedência, fazendo nosso resultado tornar-se 25.
 ---- end of part 5 */


  /* ---- begin of part 6
    // OPERADORES DE COMPARAÇÃO

    //irÁ comparar valores e retornar um Boolean como resposta à comparação

    let one = 1
    let two = 2


    // ==  igual a
    console.log(two == 1) //retorna false pois 2 é diferente de 1
    console.log(one == "1") //retorna true pois 1 é igual a "1"(no ==)

    // !=  diferente de
    console.log(one != two) //retorna true
    console.log(one != 1) //retorna false
    console.log(one != "1") //retorna fase


    // ===  extritamente igual a
    console.log(one === "1"); //retorna false, pois o TIPO da variável é diferente(um é Number e o outro é String)
    console.log(one === 1); //retorna true

    // !==  extritamente diferente de
    console.log(two !== "2"); //retorna true, pois o TIPO da variável é diferente(um é Number e o outro é String)
    console.log(two !== 2); //retorna true


    // >   Maior que
    console.log(one > two) //retorna false

    // >=  Maior igual a
    console.log(one >= 1) //retorna true, pois não é maior mas é igual
    console.log(two >= 1) //retorna true, pois 2 é maior que 1

    // <   Menor que
    console.log(one < two) //retorna false

    // <=  Menor igual a
    console.log(one <= two) // retorna true
    console.log(one <= 1) // retorna true
    console.log(one <= 0) //retorna false
 ---- end of part 6 */


  /* ---- begin of part 7
  // OPERADORES DE ATRIBUIÇÃO (ASSIGNMENT)
    let x


    // assignment
    x = 1; //x vale 1

    //addition assignment
    x += 2; //x vale 3

    // subtraction assignment
    x -= 1 //x vale 2

    //multiplication assignment
    x *= 2 //x vale 4

    //division assignment
    x /= 2 //x vale 2

    //remainder
    x %= 2 //x vale 0

    //exponetiation
    x **= 2 //x vale 0, mas é pq 0*0 = 0;


    console.log(x);
 ---- end of part 7 */


/* ---- begin of part 8
    //OPERADORES LÓGICOS (LOGICAL OPERATORS)

    // 2 valores booleanos, quando verificados resultará em verdadeiro ou falso

    let pao = true

    let queijo == false


    // AND &&
    console.log(pao && queijo); //retorna false, pois não tem pão E queijo

    //OR ||
    console.log(pao || queijo); //retorna true, pois tem pão(um ou outro)

    //NOT !
    console.log(!pao); // retorna false, pois a negação de true é false
---- end of part 8 */


/* ---- begin of part 9
    // OPERADOR CONDICIONAL (TERNÁRIO)

    //DEPENDENDO DA CONDIÇÃO, NÓS RECEBEMOS VALORES DIFERENTES


    //Condição então valor 1 se não valor 2
    // condition ? value1 : value2


    //Café da manhã top
    let pao = true
    let queijo = true

    const niceBreakfast = pao && queijo ? 'Café top' : 'Café ruim'; 
    console.log(niceBreakfast); // retorna 'Café top' pois tem pão e queijo


    //Café da manhã Ok
    pao = true
    queijo = false

    const okBreakfast = pao || queijo ? 'Café OK' : 'Café ruim'; 
    console.log(okBreakfast); // retorna 'Café ' pois tem pão pelo menos pão


    //Maior de 18
    let age = 16
    const canDrive = age >= 18 ? 'can drive' : "can't drive"
    console.log(canDrive); //retorna "can't drive", pois 16 não é maior e nem igual a 18.
---- end of part 9 */



/* ---- begin of part 10
    // OPERADOR DE STRING (STRING OPERATOR)

    //comparison (comparação)
    console.log('a' == 'a'); //retorna true

    //concatenation (concatenação)
    console.log('a' + 'a'); //retorna a união de duas strings, nesse caso 'aa'

    let alpha = 'alpha';
    console.log(alpha + 'bet'); //retorna 'alphabet'
    alpha += bets // a variável alpha agora contém a string 'alphabets'
---- end of part 10 */


/* ---- begin of part 11

\\O falsy é quando um valor é considerado falso em contextos que onde um booleano é obrigatório (condicionais e loops), exemplo a seguir:

	\\Todos os valores abaixo seriam representados como false em um boolean.
	\\	false
    \\0
    \\-0
    \\""
    \\null
    \\undefined
    \\NaN

    console.log( NaN ? 'verdadeiro' : 'falso' )


\\já o truthy é o oposto, quando um valor é considerado verdadeiro (true) em contextos onde um booleano é obrigatório (condicionais e loops), exemplo a seguir: 
	\\Todos os valores abaixo seriam representados como false em um boolean.
		true
    \\{}
    \\[]
    \\1
    \\3.23
    \\"0"
    \\"false"
    \\-1
    \\Infinity
    \\-Infinity

    console.log( Infinity ? 'verdadeiro' : 'falso' )
 ---- end of part 11 */


/* ---- begin of part 12
    // De cima para baixo, do mais importante ao menos importante.

        * grouping                      ( )
        * negação e incremento          ! ++ --
        * multiplicação e divisão       * /
        * adição e subtração            + -
        * relacional                    < <= > >=
        * igualdade                     == != === !==
        * AND                           && 
        * OR                            ||
        * condicional                   ?:
        * assignment (atribuição)       = += -= *= %= 
        
---- end of part 12 */
