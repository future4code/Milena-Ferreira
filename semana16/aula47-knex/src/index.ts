import express, { Express, Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import connection from "./connection";

const app: Express = express();

app.use(express.json());
app.use(cors());

const getActorById = async (id: string): Promise<any> => {
	const result = await connection.raw(`
    SELECT * FROM Actor WHERE id = '${id}';
  `)

	return result[0][0]
}

app.get("/users/:id", async (req: Request, res: Response) => {
	try {
		const id = req.params.id

		console.log(await getActorById(id))

		res.end()
	} catch (error: any) {
		console.log(error.message)
		res.status(500).send("Unexpected error")
	}
})

const getActorByName = async (name: string): Promise<any> => {
	const result = await connection.raw(`
		SELECT * FROM Actor WHERE name = "${name}";
	`);

	return result[0][0];
}

app.get("/users/:name", async (req: Request, res: Response) => {
	try {
		const name = req.params.name;
		console.log(await getActorByName("Juliana Paes"));
	} catch (error: any) {
		res.status(500).send("Unexpected error");
	}
})

const countActorsByGender = async (): Promise<any> => {
	const result = await connection.raw(`
		SELECT COUNT(*), gender FROM Actor
		GROUP BY gender;
	`);

	return result[0];
}

app.get("/genders", async (req: Request, res: Response) => {
	try {
		console.log(await countActorsByGender())
	} catch {
		res.status(500).send("Unexpected error");
	}
})

const createActor = async (
	id: string,
	name: string,
	salary: number,
	dateOfBirth: Date,
	gender: string
): Promise<void> => {
	await connection
		.insert({
			id: id,
			name: name,
			salary: salary,
			birth_date: dateOfBirth,
			gender: gender,
		})
		.into("Actor");
};

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

const updateSalary = async (
	id: string,
	salary: number
): Promise<void> => {
	await connection("Actor")
		.update({
			salary: salary
		})
		.where("id", id)
}

app.put("/salary", async (req: Request, res: Response) => {
	try {
		const { id, salary } = req.body;
		await updateSalary(id, salary);
		res.status(200).send("Salary updated successfully");
	} catch (error: any) {
		res.status(500).send(error.sqlMessage || error.message);
	}
})

const deleteActor = async (id: string): Promise<any> => {
	await connection("Actor")
		.where({ id })
		.delete();
}

app.delete("/actor", async (req: Request, res: Response) => {
	try {
		const id = req.query.id as string;
		await deleteActor(id);

		res.status(200).send("Actor sucessfully deleted from database")
	} catch (error: any) {
		res.status(500).send(error.sqlMessage || error.Message)
	}
})

const getSalaryByGender = async (
	gender: string
): Promise<any> => {
	return await connection("Actor")
		.avg("salary")
		.where({ gender })
}

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



const server = app.listen(process.env.PORT || 3003, () => {
	if (server) {
		const address = server.address() as AddressInfo;
		console.log(`Server is running in http://localhost:${address.port}`);
	} else {
		console.error(`Failure upon starting server.`);
	}
});