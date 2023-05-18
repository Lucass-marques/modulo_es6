// Criando o array dos objetos com nome e nota dos alunos
const students = [
    {nome: "Lucas", nota: 8},
    {nome: "Júlia", nota: 10},
    {nome: "Matheus", nota: 2},
    {nome: "Bernardo", nota: 1},
    {nome: "Guilherme", nota: 5}
];


// Criando a função que retorna os alunos que tiveram notas acima ou igual a 6
function approvedStudents(students) {
    return students.filter(student => student.nota >= 6);
}


//  Exibindo os alunos na tela
console.log(approvedStudents(students))