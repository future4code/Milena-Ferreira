import express, { Express, Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";

const app: Express = express();

app.use(express.json());
app.use(cors());

enum UserRoles {
	ADMIN = "ADMIN",
	NORMAL = "NORMAL"
}

type user = {
	id: number,
	name: string,
	email: string,
	type: UserRoles,
	age: number
}

let users: user[] = [
	{
		id: 1,
		name: "Alice",
		email: "alice@email.com",
		type: UserRoles.ADMIN,
		age: 12
	},
	{
		id: 2,
		name: "Bob",
		email: "bob@email.com",
		type: UserRoles.NORMAL,
		age: 36
	},
	{
		id: 3,
		name: "Coragem",
		email: "coragem@email.com",
		type: UserRoles.NORMAL,
		age: 21
	},
	{
		id: 4,
		name: "Dory",
		email: "dory@email.com",
		type: UserRoles.NORMAL,
		age: 17
	},
	{
		id: 5,
		name: "Elsa",
		email: "elsa@email.com",
		type: UserRoles.ADMIN,
		age: 17
	},
	{
		id: 6,
		name: "Fred",
		email: "fred@email.com",
		type: UserRoles.ADMIN,
		age: 60
	}
]

app.get("/users", (req: Request, res: Response) => {
	try {
		let type = req.query.type as string;
		let name = req.query.name as string;

		if (type) {
			type = type.toUpperCase();

			if (type in UserRoles) {
				const result = users.filter((user) => user.type === type);
				return res.status(200).send(result);
			}

			throw new Error("Invalid type");
		}

		if (name) {
			name = name.toLowerCase();

			const result = users.filter((user) => {
				return user.name.toLowerCase().includes(name)
			})

			if (result.length === 0) {
				return res.status(204).send("No user was found")
			}

			res.status(200).send(result)
		}

		// para buscar todos os usuarios, sem parametros
		res.status(200).send(users)
	} catch (error: any) {
		res.status(400).send({ message: error.message })
	}
})

app.post("/users", (req: Request, res: Response) => {
	let errorCode: number = 400;
	try {
		const { id, name, email, type, age } = req.body;

		if (!id || !name || !email || !type || !age) {
			errorCode = 422;
			throw new Error("Please check that the fields are declared correctly");
		}

		if (type! in UserRoles) {
			errorCode = 422;
			throw new Error("Invalid type. The user type must be ADMIN or NORMAL");
		}

		const newUser: user = {
			id,
			name,
			email,
			type,
			age
		}

		users.push(newUser);

		res.status(201).send({ message: "User created successfully" })
	} catch (error: any) {
		res.status(errorCode).send({ message: error.message })
	}
})

app.put("/users", (req: Request, res: Response) => {
	let errorCode: number = 400;
	try {
		const { id, name, email, type, age } = req.body;

		if (!id || !name || !email || !type || !age) {
			errorCode = 422;
			throw new Error("Please check that the fields are declared correctly");
		}

		if (type! in UserRoles) {
			errorCode = 422;
			throw new Error("Invalid type. The user type must be ADMIN or NORMAL");
		}

		const newUser: user = {
			id,
			name,
			email,
			type,
			age
		}

		users.push(newUser);

		res.status(201).send({ message: "User created successfully" })
	} catch (error: any) {
		res.status(errorCode).send({ message: error.message })
	}
})

const server = app.listen(process.env.PORT || 3003, () => {
	if (server) {
		const address = server.address() as AddressInfo;
		console.log(`Server is running at http://localhost:${address.port}`);
	} else {
		console.log("Failure upon starting server");
	}
})