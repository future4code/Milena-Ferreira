import { Request, Response } from "express";
import selectUsers from "../data/selectUsers";

// Endpoint original
const getAllUsers = async (req: Request, res: Response): Promise<void> => {
	try {
		const users = await selectUsers();

		if (!users.length) {
			res.statusCode = 404;
			throw new Error("No users found");
		}

		res.status(200).send(users);

	} catch (error: any) {
		res.send(error.message || error.sqlMessage);
	}
}

export default getAllUsers;