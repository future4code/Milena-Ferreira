import { Request, Response } from "express";
import insertProduct from "../data/insertProduct";

const createProduct = async (
	req: Request,
	res: Response
): Promise<void> => {
	try {
		const id: string = new Date().getTime().toString();

		await insertProduct(
			id,
			req.body.name,
			Number(req.body.price),
			req.body.image_url
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

export default createProduct;