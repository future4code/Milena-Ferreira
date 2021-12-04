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

		console.log("log 4", await getActorById(id))

		res.end()
	} catch (error: any) {
		console.log("log ", error.message)
		res.status(500).send("Unexpected error")
	}
})

// // Assim a chamada funciona fora dos endpoints com .then()/.catch
// getActorById("001")
// 	.then(result => {
// 		console.log("log 1", result)
// 	})
// 	.catch(err => {
// 		console.log("log 2", err)
// 	});

// // Assim a chamada funciona fora dos endpoints com await
// (async () => {
// 	console.log("log 3", await getActorById("001"))
// })()

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

const groupByGender = async (): Promise<any> => {
	const result = await connection.raw(`
		SELECT COUNT(*), gender FROM Actor
		GROUP BY gender;
	`);

	return result[0];
}

app.get("/genders", async (req: Request, res: Response) => {
	try {
		console.log(await groupByGender())
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

//  adicionando diretamente
//  createActor(
// 	"015",
// 	"Tom Hanks",
// 	300000,
// 	new Date("1956-07-09"),
// 	"male"
// )
// console.log("ator adicionado ao banco")

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

// select gender, avg(salary) as salary from Actor group by gender;

const getSalaryByGender = async (
	gender: string
): Promise<any> => {
	await connection("Actor")
		.select()
		.avg("salary as average")
		.where({ gender: gender })
}

app.get("/salary", async (req: Request, res: Response) => {
	try {
		const gender = req.params.gender;

		const response = await getSalaryByGender(gender);

		res.status(200).send(response);
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