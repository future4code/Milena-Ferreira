import express, { Express, Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import connection from "./connection";

const app: Express = express();

app.use(express.json());
app.use(cors());

app.delete("/actor/:id", async (req: Request, res: Response) => {
	try {
		const id = req.params.id;
		await connection("Actor")
			.where({ id })
			.delete();

		res.status(200).send("Actor sucessfully deleted from database")
	} catch (error: any) {
		res.status(500).send(error.sqlMessage || error.Message)
	}
})

// // endpoint countActorByGender com query integrada
// app.get("/actor", async (req: Request, res: Response) => {
// 	try {
// 		const gender = req.query.gender as string;

// 		if (gender) {
// 			const result = await connection("Actor")
// 				.count(`* as quantity`)
// 				.where({ gender });

// 			res.status(200).send(result[0]);
// 		}

// 	} catch (error: any) {
// 		res.status(500).send(error.sqlMessage || error.message);
// 	}
// })

// // endpoint getActorByName and countActorByGender com query params
// app.get("/actor", async (req: Request, res: Response) => {
// 	try {
// 		const gender = req.query.gender as string;
// 		const name = req.query.name as string;

// 		if (gender) {
// 			const result = await countActorsByGender(gender);
// 			res.status(200).send(result);
// 		}

// 		if (name) {
// 			const nameParts = name.split("+");
// 			const formatedName = nameParts.join(" ");
// 			const result = await getActorByName(formatedName);
// 			res.status(200).send(result);
// 		}
// 	} catch (error: any) {
// 		res.status(500).send(error.sqlMessage || error.message);
// 	}
// })

// // endpoint getActorByName com path params
// app.get("/actor/:name", async (req: Request, res: Response) => {
// 	try {
// 		const name = req.params.name;
// 		const result = await getActorByName(name);
// 		res.status(200).send(result);
// 	} catch (error: any) {
// 		res.status(500).send(error.sqlMessage || error.message);
// 	}
// })

// // getActorById que faz a query em função separa e só chama ela no endpoint
// app.get("/actor/:id", async (req: Request, res: Response) => {
// 	try {
// 		const id = req.params.id
// 		const result = await getActorById(id);
// 		res.status(200).send(result)
// 	} catch (error: any) {
// 		res.status(500).send(error.sqlMessage || error.message);
// 	}
// })

// // getActorById com a query integrada
// app.get("/actor/:id", async (req: Request, res: Response) => {
// 	try {
// 		const id = req.params.id

// 		const result = await connection("Actor")
// 			.select()
// 			.where({ id: id });

// 		res.status(200).send(result[0]);
// 	} catch (error: any) {
// 		res.status(500).send(error.sqlMessage || error.message);
// 	}
// })

// // countActorsByGender que faz a query em função separa e só chama ela no endpoint
// app.get("/gender", async (req: Request, res: Response) => {
// 	try {
// 		console.log(await countActorsByGender())
// 	} catch {
// 		res.status(500).send("Unexpected error");
// 	}
// })

// app.get("/gender", async (req: Request, res: Response) => {
// 	try {
// 		console.log(await countActorsByGender())
// 	} catch {
// 		res.status(500).send("Unexpected error");
// 	}
// })

app.get("/salary", async (req: Request, res: Response) => {
	try {
		const gender = req.query.gender as string;

		if (gender) {
			const result = await getSalaryByGender(gender);
			console.log(result)
			res.status(200).send(result);
		} else {
			throw new Error("No query params provided")
		}
	} catch (error: any) {
		res.status(500).send(error.sqlMessage || error.message);
	}
})

app.post("/actor", async (req: Request, res: Response) => {
	try {
		const { id, name, salary, birth_date, gender } = req.body;

		const dateOfBirth = new Date(`${birth_date}`)

		await createActor(id, name, salary, dateOfBirth, gender)
		res.status(200).send("Actor successfully created");
	} catch (error: any) {
		res.status(500).send(error.sqlMessage || error.message);
	}
})

// com função de query integrada
app.put("/actor", async (req: Request, res: Response) => {
	try {
		const { id, salary } = req.body;

		await connection("Actor")
			.where({ id })
			.update({ salary });

		res.status(200).send("Salary updated successfully");
	} catch (error: any) {
		res.status(500).send(error.sqlMessage || error.message);
	}
})

// com função de query separada
// app.put("/salary", async (req: Request, res: Response) => {
// 	try {
// 		const { id, salary } = req.body;
// 		await updateSalary(id, salary);
// 		res.status(200).send("Salary updated successfully");
// 	} catch (error: any) {
// 		res.status(500).send(error.sqlMessage || error.message);
// 	}
// })

const server = app.listen(process.env.PORT || 3003, () => {
	if (server) {
		const address = server.address() as AddressInfo;
		console.log(`Server is running in http://localhost:${address.port}`);
	} else {
		console.error(`Failure upon starting server.`);
	}
});