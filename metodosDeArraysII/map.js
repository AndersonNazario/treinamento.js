// Executar a função callback passada como argumento para cada elemento do array e retorna um 
//novo array como resultado.

const usuarios = [
    { nome: 'Guido', sobrenome: 'Cerqueira', idade: 20 },
    { nome: 'Pedro', sobrenome: 'Silva', idade: 15 },
    { nome: 'Anderson', sobrenome: 'Master', idade: 19 },
];

const nomeCompleto = usuarios.map((user) => {
    return { nomeCompleto: `${user.nome} ${user.sobrenome}`, idade: user.idade }
});

console.log(nomeCompleto);
//[
//    { nomeCompleto: 'Guido Cerqueira', idade: 20 },
//    { nomeCompleto: 'Pedro Silva', idade: 15 },
//    { nomeCompleto: 'Anderson Master', idade: 19 }
//]
