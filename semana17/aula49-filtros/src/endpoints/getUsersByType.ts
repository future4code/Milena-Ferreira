import { Request, Response } from "express";
import selectUsers from "../data/selectUsers";

// Exercício 1B
const getUsersByType = async (req: Request, res: Response): Promise<void> => {
	try {
		const type = req.query.type as string || "%";

		const users = await selectUsers("%", type);

		if (!users) {
			res.statusCode = 404;
			throw new Error("No users found");
		}

		res.status(200).send(users);

	} catch (error: any) {
		res.send(error.message || error.sqlMessage);
	}
}

export default getUsersByType;