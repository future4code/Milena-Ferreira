import { Request, Response } from "express";
import selectUsers from "../data/selectUsers";

// Exercício 1A
const getUsersByName = async (req: Request, res: Response): Promise<void> => {
	try {
		const name = req.query.name as string || "%"

		const users = await selectUsers(name);

		if (!users.length) {
			res.statusCode = 404;
			throw new Error("No users found");
		}

		res.status(200).send(users)

	} catch (error: any) {
		res.send(error.message || error.sqlMessage);
	}
}

export default getUsersByName;