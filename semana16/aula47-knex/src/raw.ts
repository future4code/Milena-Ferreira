import express, { Express, Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import connection from "./connection";

const app: Express = express();

app.use(express.json());
app.use(cors());

const countActorsByGender = async (gender: string): Promise<any> => {
	const result = await connection.raw(`
	SELECT gender, COUNT(*) AS count
	FROM Actor
	WHERE gender = "${gender}";
	`);

	return result[0][0];
};

const getActorById = async (id: string): Promise<any> => {
	const result = await connection.raw(`
    SELECT * FROM Actor WHERE id = '${id}'
  `)

	return result[0][0]
};

const getActorByName = async (name: string): Promise<any> => {
	const result = await connection.raw(`
		SELECT * FROM Actor WHERE name = "${name}";
	`);

	return result[0][0];
};

const server = app.listen(process.env.PORT || 3003, () => {
	if (server) {
		const address = server.address() as AddressInfo;
		console.log(`Server is running in http://localhost:${address.port}`);
	} else {
		console.error(`Failure upon starting server.`);
	}
});