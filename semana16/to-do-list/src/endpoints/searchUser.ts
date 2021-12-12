import { Request, Response } from "express";
import selectUser from "../data/selectUser";

const searchUser = async (req: Request, res: Response) => {
	try {
		const search = req.query.search as string;

		if (search.length !== 0) {
			const result = await selectUser(search as string);
			res.status(200).send({ users: result });
		}

	} catch (error: any) {
		res.status(500).send(error.sqlMessage || error.message);
	}
}

export default searchUser;