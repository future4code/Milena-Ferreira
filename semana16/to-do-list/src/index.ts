import express, { Express, Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import connection from "./connection";

const app: Express = express();

app.use(express.json());
app.use(cors());

const createTask = async (
	id: string,
	title: string,
	description: string,
	status: string,
	deadline: Date,
	creator_id: string
): Promise<any> => {
	await connection("Task")
		.insert({
			id,
			title,
			description,
			status,
			deadline,
			creator_id
		})
}

const createUser = async (
	id: string,
	name: string,
	nickname: string,
	email: string
): Promise<void> => {
	await connection("ToDoListUser")
		.insert(
			{
				id,
				name,
				nickname,
				email
			}
		);
}

const editUser = async (
	id: string,
	name: string,
	nickname: string,
	email: string
): Promise<void> => {
	await connection("ToDoListUser")
		.update({
			name,
			nickname,
			email
		})
		.where({ id });
}

const getAllUsers = async (): Promise<any> => {
	const users = await connection("ToDoListUser")
		.select();
	const result = users.map(user => {
		return { id: user.id, nickname: user.nickname }
	})

	return result;
}

const searchUser = async (search: string): Promise<any> => {
	const users = await connection("ToDoListUser")
		.select()
	// .where({ search }); // sqlMsg: Unknown column 'search' in 'where clause'
	// .where({ `${search}`: `${search}` }); // erro ao compilar

	const result = users.map(user => {
		return { id: user.id, nickname: user.nickname }
	})

	return result;
}

const getTaskById = async (id: string): Promise<any> => {
	const result = await connection("Task")
		.select()
		.where({ id });

	return result[0];
}

const getTaskByCreator = async (creator_id: string): Promise<any> => {
	const result = await connection("Task")
		.select({
			task_id: "Task.id",
			title: "Task.title",
			description: "Task.description",
			status: "Task.status",
			deadline: "Task.deadline",
			creator_id: "Task.id",
			nickname: "ToDoListUser.nickname"
		})
		.join("ToDoListUser", "Task.creator_id", "=", "ToDoListUser.id")
		.where({ creator_id })

	return result;
}

const getUserById = async (id: string): Promise<any> => {
	const result = await connection("ToDoListUser")
		.select()
		.where({ id });

	return { "id": result[0].id, "nickname": result[0].nickname }
}

app.get("/task", async (req: Request, res: Response) => {
	try {
		const creator_id: string = req.query.creator_id as string;
		const result = await getTaskByCreator(creator_id);
		res.status(200).send({ tasks: result });
	} catch (error: any) {
		res.status(500).send(error.sqlMessage || error.message);
	}
})

app.get("/task/:id", async (req: Request, res: Response) => {
	try {
		const id = req.params.id;
		const result = await getTaskById(id);
		res.status(200).send(result);
	} catch (error: any) {
		res.status(500).send(error.sqlMessage || error.message);
	}
})

app.get("/user", async (req: Request, res: Response) => {
	try {
		const search = req.query.search as string;

		if (search.length !== 0) {
			const result = await searchUser(search as string);
			res.status(200).send({ users: result });
		}

	} catch (error: any) {
		res.status(500).send(error.sqlMessage || error.message);
	}
})

app.get("/user/all", async (req: Request, res: Response) => {
	try {
		const result = await getAllUsers();
		res.status(200).send({ users: result });
	} catch (error: any) {
		res.status(500).send(error.sqlMessage || error.message);
	}
})

app.get("/user/:id", async (req: Request, res: Response) => {
	try {
		const id = req.params.id;

		const result = await getUserById(id);

		res.status(200).send(result);
	} catch (error: any) {
		res.status(500).send(error.sqlMessage || error.message);
	}
})

app.post("/user/edit/:id", async (req: Request, res: Response) => {
	try {
		const id = req.params.id;
		const { name, nickname, email } = req.body;

		// bug: deixa enviar string vazia se houver pelo menos mais um campo preenchido
		if (name || nickname || email &&
			(name?.length !== 0
				&& nickname?.length !== 0
				&& email?.length !== 0)) {
			await editUser(id, name, nickname, email);
			res.status(200).send("User data successfully updated");
		} else {
			throw new Error("Check that all the fields are filled up correctly");
		}

	} catch (error: any) {
		res.status(500).send(error.sqlMessage || error.message);
	}
})

app.put("/task", async (req: Request, res: Response) => {
	try {
		const id = new Date().getTime().toString();
		const { title, description, deadline, creator_id } = req.body
		const [day, month, year] = deadline.split("/")
		const formatedDeadLine = new Date(`${year}-${month}-${day} 00:00:00`)
		if (title?.length !== 0
			&& description?.length !== 0
			&& deadline?.length !== 0
			&& creator_id?.length !== 0) {
			await createTask(id, title, description, "to do", formatedDeadLine, creator_id);
			res.status(200).send("Task successfully created")
		} else {
			throw new Error("Check that all the fields are filled up correctly");
		}
	} catch (error: any) {
		res.status(500).send(error.sqlMessage || error.message);
	}
})

app.put("/user", async (req: Request, res: Response) => {
	try {
		const id = new Date().getTime().toString();
		const { name, nickname, email } = req.body;

		if (name?.length !== 0
			&& nickname?.length !== 0
			&& email?.length !== 0) {
			await createUser(id, name, nickname, email);
			res.status(200).send("User successfully created");
		} else {
			throw new Error("Check that all the fields are filled up correctly");
		}
	} catch (error: any) {
		res.status(500).send(error.sqlMessage || error.message);
	}
})

const server = app.listen(process.env.PORT || 3003, () => {
	if (server) {
		const address = server.address() as AddressInfo;
		console.log(`Server is running in http://localhost: ${address.port}`);
	} else {
		console.error(`Failure upon starting server.`);
	}
});