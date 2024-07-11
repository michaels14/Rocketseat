/* 
    SCOPE

    Para ciar um escopo use "{" coloque seu código dentro dele e feche o escopo com "}"
    Escopos podem ser usados para que o JS não leia essa parte como se estivesse do escopo principal, mesmo que estejamos vendo o código aqui

    O tipo de variável "var" é global então pode ser lido também fora do escopo criado por nós(hoisting - elevação)
        evitamos utilizar por ser uma variável global e funcionar em qualquer lugar do programa

    Com o tipo let e const a variável é apenas local então não pode ser usado fora do escopo.

*/


/*var*/
    console.log("existe x antes do escopo?", x) //usando var, a variável x existirá, mas não haverá nenhum valor definido, então retornará "undefined"
    {
        var x = 0;
    }
    console.log("existe x depois do escopo?", x) //usando var, a variável x existirá e será imprimido o valor definido para ela dentro do escopo.
/*fim var*/


/*let*/
    //console.log("existe y antes do escopo?", y) //usando let, a variável y não existará fora do escopo;
    {
        //console.log("existe y antes do let y ser criado?", y) //usando let, a variável y existirá, mas apresentará um erro pois o JS não conseguirá acessar y
 
        let y = 1;

        console.log("existe y depois do let y ser criado?", y) //usando let, a variável y existirá e será imprimido o valor definido para ela dentro do escopo.
    }

    let yy = 0;
    {
        yy = 2;//como a variável yy não foi criada dentro desse escopo o JS aplicarirá essa alteração no valor buscando onde foi declaro a variável, ou seja, irá alterar o yy mesmo fora do escopo. Obs se for criado um "let yy = 3" dentro do escopo, apenas o yy dentro do escopo será alterado;
        console.log("yy dentro do escopo: ", yy);
    }
    console.log("yy fora do escopo", yy);
/*fim let*/


/*const*/
    //o que foi aplicado em questão de como a variável vai se comportar dentro e fora do escopo é praticamente igual ao let, com exceção de que não é possível alterar de forma alguma o valor de uma variável const
    const z = 0;
    {
        //z = 0; //isso não funciona, ocorrerá diretamente um erro;
        const z = 1; //isso funciona, mas é como se estivesse sendo criado uma OUTRA variável z do tipo const dentro de apenas esse escopo;
        console.log("valor de z: ", z);
    }
    console.log("valor de z: ", z);
/* fim const*/
