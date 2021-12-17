import { Request, Response } from "express";
import selectUsers from "../data/selectUsers";

const getUsers = async (
	req: Request,
	res: Response
): Promise<any> => {
	try {
		const users = await selectUsers();
		console.log(users);

		res.status(200).send(users);
	} catch (error: any) {
		if (typeof error === "object") {
			res.status(500).send(error.sqlMessage || error.message)
		} else {
			res.status(500).send(`Unexpected error: ${error}`)
		}
	}
}

export default getUsers;