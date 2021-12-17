import { Request, Response } from "express";
import selectProducts from "../data/selectProducts";
import { product } from "../types";

const getProducts = async (
	req: Request,
	res: Response
): Promise<any> => {
	try {
		const result = await selectProducts();

		const products = result.map(toProduct);

		res.status(200).send(products);
	} catch (error: any) {
		if (typeof error === "object" && error) {
			res.status(500).send(error.sqlMessage || error.message)
		} else {
			res.status(500).send(`Unexpected error: ${error}`)
		}
	}
}

const toProduct = (input: any): product => {
	return {
		id: input.id,
		name: input.name,
		price: input.price,
		imageUrl: input.image_url
	}
}

export default getProducts;