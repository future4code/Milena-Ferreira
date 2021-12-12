import { Request, Response } from "express";
import insertUser from "../data/insertUser";

const createUser = async (req: Request, res: Response) => {
	try {

		if (
			!req.body.name ||
			!req.body.nickname ||
			!req.body.email
		) {
			throw new Error(`Check that the fields "name", "nickname" and "email" are filled up correctly`);
		}

		const id: string = new Date().getTime().toString();

		await insertUser(
			id,
			req.body.name,
			req.body.nickname,
			req.body.email
		)
		const { name, nickname, email } = req.body;

		res.status(200).send("User successfully created");

	} catch (error: any) {
		res.status(500).send(error.sqlMessage || error.message);
	}
}

export default createUser;