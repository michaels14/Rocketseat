//1. Declare um variável de nome weight
    let weight;



//2. Que tipo de dado é a variável acima?
    console.log(typeof weight); //retornará undefined pois não tem nenhuma atribuição de valor



//3. Declare uma variável e atribua valores para cada um dos dados
    /* 
        name: String
        age: Number (integer)
        stars: Number (floar)
        isSubscribed: Boolean
    */
    let name, age, stars, isSubscribed;
    name = "Michael";
    age = 22;
    stars = 4.7;
    isSubscribed = true;



//4. A variável student abaixo é de que tipo de dados?
let student = {} //o tipo de dado é object, use o console.log(typeof student) para confirmar o tipo de dado
console.log(typeof student);

    /* 
        4.1 Atribua a ela as mesmas propriedades e valores do exercício 3
    */
    student = {
        name: "Michael",
        age: 22,
        stars: 4.7,
        weight: 68.5,
        isSubscribed : true
       }
    console.log(student)

    /*
        4.2 Mostre no console as seguintes mensagens:
            <name> de idade <age> pesa <weight> kg 
            Atenção, substitua <name>, <age> e <weight> pelos valores de cada objeto
    */
    console.log(`${student.name} de idade ${student.age} pesa ${student.weight} kg`)

    

//5. Declare uma variável do tipo array, de nome students e atribua nenhum valor, ou seja, somente um array vazio
    let students = [];
    console.log(students)



//6. Reatribua o valor para a variável acima, colocando dentro dela o objeto student da questão 4. (Não copiar e colar o objeto, mas usar o objeto criado e inserir ele no Array)
    students = [
        student
    ]
    console.log(students)



//7. Coloque no console o valor da posição zero do array acima
    console.log(students[0]);



//8. Crie um novo student e coloque ele na posição do Array students
    const newStudent = {
        name: "John",
        age: 31,
        stars: 4.8,
        weight: 75.3,
        isSubscribed : false
    }

    // students = [
    //     student,
    //     newStudent
    // ] //reatribuindo todos os valores de students

    students[1] = newStudent; //atribuindo newStudent diretamente na posição 1 

    console.log(students)



//9. Sem rodar o código responda qual é a resposta do código abaixo e por que? Após sua resposta, rode o código e veja se você acertou
    /*
        console.log(a) 
        var a = 1
    */ // o retorno será undefined, pois a variável existe no console(por conta do hoisting que existe no tipo "var"), mas não foi atribuído nenhum valor até a linha dele ainda.
    console.log(a) 
    var a = 1