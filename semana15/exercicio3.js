const tasksList = []
process.argv.forEach((value, index) => {
    tasksList.push(value);
})

tasksList.splice(0, 2);
console.log("tarefas: ", tasksList);