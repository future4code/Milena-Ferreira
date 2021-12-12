import { Request, Response } from "express";
import selectAllUsers from "../data/selectAllUsers";

const getAllUsers = async (req: Request, res: Response) => {
	try {
		const result = await selectAllUsers();
		res.status(200).send({ users: result });
	} catch (error: any) {
		res.status(500).send(error.sqlMessage || error.message);
	}
}

export default getAllUsers;