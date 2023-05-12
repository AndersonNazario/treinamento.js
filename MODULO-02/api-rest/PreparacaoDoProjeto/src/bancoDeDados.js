const bancoDeDados = {
    identificadorInstrutor: 3,
    identificadorAula: 2,
    instrutores: [
        {
            id: 01,
            nome: "Anderson",
            email: "anderson@gamail.com",
            status: true,
        },
        {
            id: 02,
            nome: "Igor",
            email: "igor@gamail.com",
            status: true,
        },
    ],
    aulas: [
        {
            id: 1,
            instrutor_id: 1,
            titulo: 'primeiro servidor',
            descrcao: 'construindo o primeiro servidor'
        }
    ]
};

module.exports = bancoDeDados;