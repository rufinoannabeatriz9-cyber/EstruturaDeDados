let alunos = [
    { nome: "Ana", idade: 16, disciplinaPreferida: "Matemática" },
    { nome: "Carlos", idade: 17, disciplinaPreferida: "História" },
    { nome: "Marina", idade: 15, disciplinaPreferida: "Biologia" },
    { nome: "João", idade: 16, disciplinaPreferida: "Geografia" },
    { nome: "Lucas", idade: 17, disciplinaPreferida: "Física" }
];

for(let i = 0; i < alunos.length; i++) {

    alert(
        "Nome: " + alunos[i].nome +
        " | Idade: " + alunos[i].idade +
        " | Disciplina: " + alunos[i].disciplinaPreferida
    );

}

console.log(alunos);

alert("Nome do primeiro aluno: " + alunos[0].nome);

alert(
    "Disciplina favorita do último aluno: " +
    alunos[4].disciplinaPreferida
);