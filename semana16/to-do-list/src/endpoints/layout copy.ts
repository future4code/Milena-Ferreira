import { Request, Response } from "express";

const functionName = async (req: Request, res: Response) => {
	try {

		res.status(200).send("");
	} catch (error: any) {
		res.status(500).send(error.sqlMessage || error.message);
	}
}

export default functionName;