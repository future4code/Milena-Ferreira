import { Request, Response } from "express";
import insertTask from "../data/insertTask";

const createTask = async (req: Request, res: Response) => {
	try {
		const id = new Date().getTime().toString();
		const { title, description, deadline, creator_id } = req.body
		const [day, month, year] = deadline.split("/")
		const formatedDeadLine = new Date(`${year}-${month}-${day} 00:00:00`)
		if (title?.length !== 0
			&& description?.length !== 0
			&& deadline?.length !== 0
			&& creator_id?.length !== 0) {
			await insertTask(id, title, description, "to do", formatedDeadLine, creator_id);
			res.status(200).send("Task successfully created")
		} else {
			throw new Error("Check that all the fields are filled up correctly");
		}
	} catch (error: any) {
		res.status(500).send(error.sqlMessage || error.message);
	}
}

export default createTask;
