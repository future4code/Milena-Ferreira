// Exercício 3

const tasks = [
    "estudar",
    "comprar pão"
];

const newTask = process.argv[2];
tasks.push(newTask);

console.log(`Tarefa adicionada com sucesso!

tarefas: ${tasks}`);