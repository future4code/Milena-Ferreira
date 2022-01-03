import { Request, Response } from "express";
import selectPurchase from "../data/selectPurchase";
import { product } from "../types";

const getUsersPurchase = async (
	req: Request,
	res: Response
): Promise<any> => {
	try {
		const userId = req.params.user_id;

		const result = await selectPurchase(userId);

		// const products = result.map(toPurchase);

		res.status(200).send(result);
	} catch (error: any) {
		if (typeof error === "object") {
			console.log({ error })
			res.status(500).send(error.sqlMessage || error.message)
		} else {
			res.status(500).send(`Unexpected error: ${error}`)
		}
	}
}

// const toPurchase = (input: any): product => {
// 	return {
// 		id: input.id,
// 		name: input.name,
// 		price: input.price,
// 		imageUrl: input.image_url
// 	}
// }

export default getUsersPurchase;