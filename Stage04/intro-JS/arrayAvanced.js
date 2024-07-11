/*
    AVANÇANDO COM ARRAY
*/

const animals = [
    'lion',
    'monkey',
    'cat'
]

//acessar valores dentro do array
console.log(animals);//retorna todas as informações do array animals

console.log(animals[0]); //retorna a primeira posição(sim, a primeira posição é a 0) do array animals

console.log(animals.length)// retorna o total de elementos dentro do array animals

console.log(animals[3])// retorna "undefined" pois não existe nada na posição 3, então tecnicamente ela não existe


//Array com object dentro | não é ideal usar conforme o exemplo por se tratar de um array com diferentes tipos de dados(string e object)
const fruits = [
    'orange',
    'banana',
    {
        name: 'apple',
        color: 'red'
    }
]

console.log(fruits[2])// retorna a posição 2, nesse caso retorna o object todo
console.log(fruits[2].name)//retorna o atributo name do objeto que está na posição 2 | isso retornaria "undefined" nesse exemplo caso a posição fosse alterada de 2 para 1 ou 0 pois essas posições não são do tipo object

