import express, { Express, Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import connection from "./connection";

const app: Express = express();

app.use(express.json());
app.use(cors());

app.get("/test", (req, res) => {
	res.send("Servidor funcionando")
})

const getActorById = async (id: string): Promise<any> => {
	const result = await connection.raw(`
    SELECT * FROM Actor WHERE id = '${id}'
  `)

	return result[0][0]
}

// Assim a chamada funciona fora dos endpoints com .then()/.catch
getActorById("001")
	.then(result => {
		console.log("log 1", result)
	})
	.catch(err => {
		console.log("log 2", err)
	});

// Assim a chamada funciona fora dos endpoints com await
(async () => {
	console.log("log 3", await getActorById("001"))
})()


// Ou então podemos chamá-la dentro de um endpoint
app.get("/users/:id", async (req: Request, res: Response) => {
	try {
		const id = req.params.id

		console.log("log 4", await getActorById(id))

		res.end()
	} catch (error: any) {
		console.log("log ", error.message)
		res.status(500).send("Unexpected error")
	}
}) // bata no http://localhost:3003/users/001 e veja o que acontece no terminal

const server = app.listen(process.env.PORT || 3003, () => {
	if (server) {
		const address = server.address() as AddressInfo;
		console.log(`Server is running in http://localhost:${address.port}`);
	} else {
		console.error(`Failure upon starting server.`);
	}
});