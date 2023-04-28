const professores = [
    { nome: 'Kauan', stack: 'front' },
    { nome: 'Anderson', stack: 'back' },
    { nome: 'Igor', stack: 'front' },
    { nome: 'Italo', stack: 'front' },
    { nome: 'Ita', stack: 'back' },
    { nome: 'Thayna', stack: 'front' }
];

const validarPreofessor = (professor, validarStack) => {
    let front = [];
    let back = [];
    for (const i of professor) {
        if (validarStack(i)) {
            front.push(i)
        } else {
            back.push(i);
        }
    }
    console.log(front);
    console.log(back);
}

validarPreofessor(professores, (validacaoStack) => {
    return validacaoStack.stack === 'front';
});
//[ { nome: 'Kauan', stack: 'front' },{ nome: 'Igor', stack: 'front' }, { nome: 'Italo', stack: 'front' }, { nome: 'Thayna', stack: 'front' }]
//[ { nome: 'Anderson', stack: 'back' }, { nome: 'Ita', stack: 'back' } ]
