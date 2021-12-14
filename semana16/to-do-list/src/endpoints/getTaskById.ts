import { Request, Response } from "express";
import selectTaskById from "../data/selectTaskById";

const getTaskById = async (req: Request, res: Response) => {
	try {
		const id = req.params.id;

		const task = await selectTaskById(id);

		const day = task.deadline.getDate();
		const month = task.deadline.getMonth() + 1;
		const year = task.deadline.getFullYear();
		const formattedDate = `${day}/${month}/${year}`

		res.status(200).send({
			...task,
			deadline: formattedDate
		});

	} catch (error: any) {
		res.status(500).send(error.sqlMessage || error.message);
	}
}

export default getTaskById;