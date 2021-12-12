import { Request, Response } from "express";
import updateUser from "../data/updateUser";

const editUser = async (req: Request, res: Response) => {
	try {
		if (
			req.body.name === "" ||
			req.body.nickname === "" ||
			req.body.email === ""
		) {
			throw new Error(`Check that the fields "name", "nickname" and "email" are filled up correctly`);
		}

		if (!req.body.name && !req.body.nickname && !req.body.email) {
			throw new Error(`Choose at least one field ("name", "nickname" or "email") to update`);
		}

		await updateUser(
			req.body.name,
			req.body.nickname,
			req.body.email
		)

		res.status(200).send("User data successfully updated");

	} catch (error: any) {
		res.status(500).send(error.sqlMessage || error.message);
	}
}

export default editUser;