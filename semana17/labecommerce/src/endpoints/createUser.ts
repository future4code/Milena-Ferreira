import { Request, Response } from "express";
import insertUser from "../data/insertUser";

const createUser = async (
	req: Request,
	res: Response
): Promise<void> => {
	try {
		const id: string = new Date().getTime().toString();

		await insertUser(
			id,
			req.body.name,
			req.body.email,
			req.body.password
		);

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