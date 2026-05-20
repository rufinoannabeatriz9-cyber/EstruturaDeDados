# EstruturaDeDados
# 📚 Cadastro de Alunos em JavaScript

<p align="center">
  <img src="https://img.shields.io/badge/JavaScript-Array%20%2B%20Objetos-yellow?style=for-the-badge&logo=javascript">
  <img src="https://img.shields.io/badge/Status-Finalizado-success?style=for-the-badge">
  <img src="https://img.shields.io/badge/Nível-Iniciante-blue?style=for-the-badge">
</p>

---

# ✨ Sobre o projeto

Esse projeto foi desenvolvido para praticar conceitos básicos de JavaScript utilizando:

- Arrays;
- Objetos;
- Laços de repetição (`for`);
- `alert()`;
- `console.log()`.

O sistema cria uma lista de alunos contendo:

✅ Nome  
✅ Idade  
✅ Disciplina preferida  

Depois o programa:

- mostra todos os alunos cadastrados;
- exibe o nome do primeiro aluno;
- mostra a disciplina favorita do último aluno.

---

# 🧠 Conceitos usados

## 📦 Array

Um array serve para armazenar vários valores em uma única variável.

```javascript
let frutas = ["Maçã", "Banana", "Uva"];
```

---

## 🧩 Objeto

Objetos servem para organizar informações.

```javascript
{
  nome: "Ana",
  idade: 16
}
```

---

## 🔁 For

O `for` serve para repetir algo várias vezes.

```javascript
for(let i = 0; i < 5; i++) {
  console.log(i);
}
```

---

# 💻 Código do projeto

```javascript
let alunos = [
    { nome: "Ana", idade: 16, disciplinaPreferida: "Matemática" },
    { nome: "Carlos", idade: 17, disciplinaPreferida: "História" },
    { nome: "Marina", idade: 15, disciplinaPreferida: "Biologia" },
    { nome: "João", idade: 16, disciplinaPreferida: "Geografia" },
    { nome: "Lucas", idade: 17, disciplinaPreferida: "Física" }
];

// Mostrar todos os cadastrados
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
```

---

# 🔍 Explicação do código

## 📌 alunos.length

```javascript
alunos.length
```

Serve para mostrar quantos alunos existem no array.

Resultado:

```javascript
5
```

---

## 📌 alunos[0]

```javascript
alunos[0]
```

Pega o primeiro aluno do array.

---

## 📌 alunos[4]

```javascript
alunos[4]
```

Pega o último aluno do array.

---

## 📌 i++

```javascript
i++
```

Significa:

```javascript
i = i + 1
```

Serve para passar para o próximo aluno.

---

# 🎯 Resultado esperado

```javascript
Nome: Ana | Idade: 16 | Disciplina: Matemática

Nome: Carlos | Idade: 17 | Disciplina: História

Nome: Marina | Idade: 15 | Disciplina: Biologia

Nome: João | Idade: 16 | Disciplina: Geografia

Nome: Lucas | Idade: 17 | Disciplina: Física
```

---

# 🚀 O que aprendi

✔ Criar arrays  
✔ Criar objetos  
✔ Utilizar `for`  
✔ Trabalhar com repetição  
✔ Mostrar informações na tela  
✔ Acessar dados específicos  

---

# 🛠 Tecnologias utilizadas

- JavaScript
- VS Code
- Navegador Web

---

# 🌟 Melhorias futuras

- Cadastro de novos alunos;
- Remover alunos;
- Editar informações;
- Criar interface com HTML/CSS;
- Salvar dados.

---

# 👩‍💻 Autora

**Anna Beatriz Rufino de Araújo** ✨
