import { Request, Response } from "express";
import selectUser from "../data/selectUser";
import { User } from "../types";

const getUser = async (
	req: Request,
	res: Response
): Promise<any> => {
	try {
		const users: User[] = await selectUser();
		res.status(200).send(users);
	} catch (error: any) {
		if (typeof error === "object") {
			res.status(500).send(error.sqlMessage || error.message)
		} else {
			res.status(500).send(`Unexpected error: ${error}`)
		}
	}
}

export default getUser;