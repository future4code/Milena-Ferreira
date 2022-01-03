import { Request, Response } from "express";
import insertUser from "../data/insertUser";
import { user } from "../types";

const createUser = async (
	req: Request,
	res: Response
): Promise<void> => {
	try {
		const { name, email, password } = req.body;
		const id: string = new Date().getTime().toString();

		if (!name || !email || !password) {
			throw new Error("Check that all fields be filled up correctly: name, email or password")
		}

		const user: user = { id, name, email, password }


		await insertUser(user);

		res.status(200).send("User successfully created");

	} catch (error: any) {
		if (typeof error === "object") {
			res.status(500).send(error.sqlMessage || error.message)
		} else {
			res.status(500).send(`Unexpected error: ${error}`)
		}
	}
}

export default createUser;