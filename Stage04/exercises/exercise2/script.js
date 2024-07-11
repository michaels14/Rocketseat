let studentsList = [
    {
        name: 'Michael',
        firstGrade: 7.5,
        secondGrade: 5.7,
    },
    
    {
        name: 'Nina',
        firstGrade: 8.5,
        secondGrade: 9.2,
    },

    {
        name: 'Yan',
        firstGrade: 4.0,
        secondGrade: 5.0,
    },

    {
        name: 'Leonardo',
        firstGrade: 3.5,
        secondGrade: 2.2,
    }
];

for(student of studentsList){
    let average = ((student.firstGrade + student.secondGrade) / 2).toFixed(1); 
    if(average >= 7){
        alert(`
            A média do(a) aluno(a) ${student.name} é: ${average}
                Parabéns, ${student.name}! Você foi aprovado(a) no curso!!
            `);
    }else if(average >= 4){
        alert(`
            A média do(a) aluno(a) ${student.name} é: ${average}
                Não foi dessa vez, ${student.name}! Estude um pouco mais e passará no exame!!
            `);
    }else{
        alert(`
            A média do(a) aluno(a) ${student.name} é: ${average}
                Não foi dessa vez, ${student.name}! Tente novamente no próximo semestre!!
            `);
    }
}