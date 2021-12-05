import express, { Express, Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import connection from "./connection";

const app: Express = express();

app.use(express.json());
app.use(cors());

const countActorsByGender = async (gender: string): Promise<any> => {
	const result = await connection("Actor")
		.count(`* as count`)
		.where({ gender })

	return result[0];
}

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

const deleteActor = async (id: string): Promise<void> => {
	await connection("Actor")
		.where({ id })
		.delete();
};

const getActorById = async (id: string): Promise<any> => {
	const result = await connection("Actor")
		.select()
		.where({ id })

	return result[0];
};

const getActorByName = async (name: string): Promise<any> => {
	const result = await connection("Actor")
		.select()
		.where({ name });

	return result[0][0];
};

const getAverageSalaryByGender = async (
	gender: string
): Promise<any> => {
	const result = await connection("Actor")
		.avg("salary")
		.where({ gender })

	return result[0];
}

const updateSalary = async (
	id: string,
	salary: number
): Promise<void> => {
	await connection("Actor")
		.where({ id })
		.update({ salary });
};

app.delete("/actor/:id", async (req: Request, res: Response) => {
	try {
		const id = req.params.id;
		await deleteActor(id);
		res.status(200).send("Actor sucessfully deleted from database")
	} catch (error: any) {
		res.status(500).send(error.sqlMessage || error.Message)
	}
})

app.get("/actor", async (req: Request, res: Response) => {
	try {
		const gender = req.query.gender as string;
		const name = req.query.name as string;

		if (gender) {
			const result = await countActorsByGender(gender);
			res.status(200).send(result);
		}

		if (name) {
			const nameParts = name.split("+");
			const formatedName = nameParts.join(" ");
			const result = await getActorByName(formatedName);
			res.status(200).send(result);
		}

	} catch (error: any) {
		res.status(500).send(error.sqlMessage || error.message);
	}
})

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

app.get("/actor/:id", async (req: Request, res: Response) => {
	try {
		const id = req.params.id;
		const result = await getActorById(id);
		res.status(200).send(result)
	} catch (error: any) {
		res.status(500).send(error.sqlMessage || error.message);
	}
})

// pega média de salários de acordo com gender
app.get("/salary", async (req: Request, res: Response) => {
	try {
		const gender = req.query.gender as string;

		if (gender) {
			const result = await getAverageSalaryByGender(gender);
			console.log(result)
			res.status(200).send(result);
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

app.put("/actor", async (req: Request, res: Response) => {
	try {
		const { id, salary } = req.body;
		await updateSalary(id, salary);
		res.status(200).send("Salary updated successfully");
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