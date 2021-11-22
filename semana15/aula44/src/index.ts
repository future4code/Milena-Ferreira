import express, { Express, Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { user, users, UserType } from "./users";

const app: Express = express();

app.use(express.json());
app.use(cors());

// exercicio 1 - getAllUsers
app.get("/users", (req: Request, res: Response) => {
	let errorCode = 400;
	try {
		res.status(200).send(users);
	} catch (error: any) {
		res.status(errorCode).send({ message: error.message })
	}
})

// exercicio 2 - getUserByType
app.get("/users", (req: Request, res: Response) => {
	let errorCode = 400;
	try {
		const type: string = req.query.type as string;
		const filteredUsers: user[] | undefined = users.filter((user) => user.type === type);

		if (!filteredUsers) {
			errorCode = 404;
			throw new Error(`The only options for category are ADMIN or NORMAL`);
		}

		res.status(200).send(users)

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