const newList = process.argv.slice(2);

const tasksList = [
    "Fazer jantar"
];

newList.forEach((task) => {
    tasksList.push(task);
})

console.log("tarefas: ", tasksList);


// Com esse código eu teria que alterar o índice do start point do splice dependendo da quantidade de itens na lista inicial.

// const tasksList = [
//     "Fazer jantar"
// ];

// process.argv.forEach((task) => {
//     tasksList.push(task);
// })

// tasksList.splice(1, 2);
// console.log("tarefas: ", tasksList);