import { Request, Response } from "express";
import insertPurchase from "../data/insertPurchase";
import selectProducts from "../data/selectProducts";

const createPurchase = async (
	req: Request,
	res: Response
): Promise<void> => {
	try {
		const id: string = new Date().getTime().toString();

		const totalPrice = 0; // ??????

		await insertPurchase(
			id,
			req.body.user_id,
			req.body.product_id,
			Number(req.body.quantity),
			totalPrice
		);

		res.status(200).send("Product successfully created");

	} catch (error: any) {
		if (typeof error === "object") {
			res.status(500).send(error.sqlMessage || error.message)
		} else {
			res.status(500).send(`Unexpected error: ${error}`)
		}
	}
}

export default createPurchase;