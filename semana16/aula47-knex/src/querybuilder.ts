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

const deleteActor = async (id: string): Promise<any> => {
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

const getSalaryByGender = async (
	gender: string
): Promise<any> => {
	return await connection("Actor")
		.avg("salary")
		.where({ gender })
}


const updateSalary = async (
	id: string,
	salary: number
): Promise<void> => {
	await connection("Actor")
		.update({
			salary: salary
		})
		.where("id", id)
};


// com query param
app.delete("/actor", async (req: Request, res: Response) => {
	try {
		const id = req.query.id as string;
		await deleteActor(id);

		res.status(200).send("Actor sucessfully deleted from database")
	} catch (error: any) {
		res.status(500).send(error.sqlMessage || error.Message)
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