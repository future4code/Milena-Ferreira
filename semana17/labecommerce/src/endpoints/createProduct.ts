import { Request, Response } from "express";
import insertProduct from "../data/insertProduct";
import { Product } from "../types";

const createProduct = async (
	req: Request,
	res: Response
): Promise<void> => {
	try {
		const { name, price, image_url } = req.body;

		if (!name || !price || !image_url) {
			throw new Error("Missing field: name, email or password")
		}

		const id: string = new Date().getTime().toString();

		const product: Product = { id, name, price, image_url }

		await insertProduct(product);

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