import { Request, Response } from "express";
import selectUser from "../data/selectUser";

const searchUser = async (req: Request, res: Response) => {
	try {
		const query = req.query.query as string || "%";

		if (query) {
			const users = await selectUser(query);

			res.status(200).send(users)
		}

	} catch (error: any) {
		res.status(500).send(error.sqlMessage || error.message);
	}
}

export default searchUser;