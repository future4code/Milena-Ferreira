import { Request, Response } from "express";
import insertTaskAssignment from "../data/insertTaskAssignment";

const assignUser = async (req: Request, res: Response) => {
	try {

	} catch (error: any) {
		res.status(500).send(error.sqlMessage || error.message);
	}
}

export default assignUser;