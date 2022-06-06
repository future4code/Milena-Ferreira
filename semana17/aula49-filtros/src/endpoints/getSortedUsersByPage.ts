import { Request, Response } from "express";
import selectUsers from "../data/selectUsers";

// Exercício 3
const getSortedUsersByPage = async (req: Request, res: Response): Promise<void> => {
	try {
		const name = req.query.name as string || "%"
		const type = req.query.type as string || "%";
		const sort = req.query.sort as string || "email";
		const order = req.query.order as string || "ASC";
		const page = Number(req.query.page) || 1;
		const size = 5
		const offset = size * (page - 1);

		const users = await selectUsers(name, type, sort, order, size, offset);

		if (!users.length) {
			res.statusCode = 404;
			throw new Error("No users found");
		}

		res.status(200).send(users);

	} catch (error: any) {
		res.send(error.message || error.sqlMessage);
	}
}

export default getSortedUsersByPage;