import express, { Express, Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";

const app: Express = express();
app.use(express.json());
app.use(cors());

type account = {
	name: string,
	cpf: number,
	birthDate: string,
	balance: number,
	transactions: transaction[]
}

type transaction = {
	description: string,
	value: number,
	date: string
}

const accounts: account[] = [
	{
		name: "Ana",
		cpf: 12332112312,
		birthDate: "06/08/1992",
		balance: 0,
		transactions: []
	},
	{
		name: "Eduardo",
		cpf: 22332112333,
		birthDate: "22/09/2000",
		balance: 0,
		transactions: []
	}
];

app.post("/account", (req: Request, res: Response) => {
	let errorCode = 400;
	try {
		const { name, cpf, birthDate, balance, transactions } = req.body;

		if (!name || !cpf || !birthDate || !balance || !transactions) {
			throw new Error("Missing data in body to create user");
		}

		if (typeof name !== "string") {
			throw new Error("Invalid name");
		}

		if (typeof cpf !== "number") {
			throw new Error("Invalid CPF");
		}

		if (typeof birthDate !== "string") {
			throw new Error("Invalid birth date");
		}

		if (typeof balance !== "number") {
			throw new Error("Invalid balance value");
		}

		if (balance !== 0) {
			throw new Error("Initial balance value must be set to 0");
		}

		// if (typeof transactions !== "transaction") {
		// 	throw new Error("Initial balance value must be set to 0");
		// }

		const newAccount: account = {
			name,
			cpf,
			birthDate,
			balance,
			transactions
		}

		accounts.push(newAccount);

		res.status(200).send({ message: "User successfully created" });

	} catch (error: any) {
		res.status(errorCode).send({ message: error.message })
	}

})

const server = app.listen(process.env.PORT || 3003, () => {
	const address = server.address() as AddressInfo;
	if (server) {
		console.log(`Server is running in http://localhost: ${address.port}`)
	} else {
		console.error(`Failure upon starting server.`);
	}
})