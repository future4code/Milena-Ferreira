import { Request, Response } from "express";
import insertTask from "../data/insertTask";

const createTask = async (req: Request, res: Response) => {
	try {
		if (
			!req.body.title ||
			!req.body.description ||
			!req.body.deadline ||
			!req.body.creator_id
		) {
			throw new Error("Check that all the fields are filled up correctly");
		}

		const dateDiff = Date.parse(req.body.deadline) - Date.now() + 86400000;

		if (dateDiff < 0) {
			throw new Error("The deadline must be set to today or a future date");
		}

		const [day, month, year] = req.body.deadline.split("/");
		const formatedDeadLine = new Date(`${year}-${month}-${day} 00:00:00`);

		const id = new Date().getTime().toString();
		await insertTask(
			id,
			req.body.title,
			req.body.description,
			"to do",
			formatedDeadLine,
			req.body.creator_id
		);

		res.status(200).send({
			message: "Task successfully created",
			id
		});

	} catch (error: any) {
		res.status(500).send(error.sqlMessage || error.message);
	}
}

export default createTask;
