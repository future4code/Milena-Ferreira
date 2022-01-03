import { Request, Response } from "express";
import insertPurchase from "../data/insertPurchase";
import selectProduct from "../data/selectProduct";

const createPurchase = async (
	req: Request,
	res: Response
): Promise<void> => {
	try {
		// const id: string = new Date().getTime().toString();

		// const product = await selectProduct(req.body.product_id);
		// const price = product[0].price;
		// await insertPurchase(
		// 	id,
		// 	req.body.user_id,
		// 	req.body.product_id,
		// 	Number(req.body.quantity),
		// 	price
		// );

		// res.status(200).send(`Success! You bought a(n) ${product[0].name}`);

	} catch (error: any) {
		if (typeof error === "object") {
			res.status(500).send(error.sqlMessage || error.message)
		} else {
			res.status(500).send(`Unexpected error: ${error}`)
		}
	}
}

export default createPurchase;