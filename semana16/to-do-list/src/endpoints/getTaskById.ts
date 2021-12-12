import { Request, Response } from "express";
import selectTaskById from "../data/selectTaskById";

const getTaskById = async (req: Request, res: Response) => {
	try {
		const id = req.params.id;
		const result = await selectTaskById(id);
		res.status(200).send(result);
	} catch (error: any) {
		res.status(500).send(error.sqlMessage || error.message);
	}
}

export default getTaskById;