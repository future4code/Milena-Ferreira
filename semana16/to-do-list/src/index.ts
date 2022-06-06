import express, { Express, Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import createTask from "./endpoints/createTask";
import createUser from "./endpoints/createUser";
import editUser from "./endpoints/editUser";
import getAllUsers from "./endpoints/getAllUsers";
import getTaskByCreatorId from "./endpoints/getTaskByCreatorId";
import getTaskById from "./endpoints/getTaskById";
import getUserById from "./endpoints/getUserById";
import searchUser from "./endpoints/searchUser";
import assignUser from "./endpoints/assignUser";

const app: Express = express();

app.use(express.json());
app.use(cors());

// 1. Criar usuário 
app.put("/user", createUser);

// 8. Pesquisar usuário 
app.get("/user", searchUser);

// 6. Pegar todos os usuários
app.get("/user/all", getAllUsers);

// 2. Pegar usuário pelo id
app.get("/user/:id", getUserById);

// 3. Editar usuário
app.post("/user/edit/:id", editUser);

// 4. Criar tarefa
app.put("/task", createTask);

// 5. Pegar tarefa pelo id
app.get("/task/:id", getTaskById);

// 7. Pegar tarefas criadas por um usuário
app.get("/task", getTaskByCreatorId);

// ENDPOINTS A FAZER

// 9. Atribuir um usuário responsável a uma tarefa
// 10. Pegar usuários responsáveis por uma tarefa
// 11. Pegar tarefa pelo id
// 12. Atualizar o status da tarefa
// 13. Pegar todas as tarefas por status
// 14. Pegar todas as tarefas atrasadas
// 15. Retirar um usuário responsável de uma tarefa
// 16. Atribuir mais de um responsável a uma tarefa
// 17. Procurar tarefa por termos
// 18, Atualizar o status de várias tarefas
// 19. Deletar tarefa
// 20. Deletar usuário


const server = app.listen(process.env.PORT || 3003, () => {
	if (server) {
		const address = server.address() as AddressInfo;
		console.log(`Server is running in http://localhost: ${address.port}`);
	} else {
		console.error(`Failure upon starting server.`);
	}
});