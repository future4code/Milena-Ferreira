import { Request, Response } from "express";
import selectTaskByCreator from "../data/selectTaskByCreator";

const getTaskByCreatorId = async (req: Request, res: Response) => {
	try {
		const creator_id: string = req.query.creator_id as string;
		const result = await selectTaskByCreator(creator_id);
		res.status(200).send({ tasks: result });
	} catch (error: any) {
		res.status(500).send(error.sqlMessage || error.message);
	}
}

export default getTaskByCreatorId;