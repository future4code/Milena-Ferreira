import { Request, Response } from "express";
import selectProduct from "../data/selectProduct";
import { Product } from "../types";

const getProduct = async (
	req: Request,
	res: Response
): Promise<any> => {
	try {
		const page = Number(req.query.page) || 1;
		const size = Number(req.query.size) || 10;
		const offset = page * (page - 1);

		const result = await selectProduct(size, offset);

		const products = result.map(toProduct);

		res.status(200).send(products);
	} catch (error: any) {
		if (typeof error === "object") {
			res.status(500).send(error.sqlMessage || error.message)
		} else {
			res.status(500).send(`Unexpected error: ${error}`)
		}
	}
}

const toProduct = (input: any): Product => {
	return {
		id: input.id,
		name: input.name,
		price: input.price,
		image_url: input.image_url
	}
}

export default getProduct;