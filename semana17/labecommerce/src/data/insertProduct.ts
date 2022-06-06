import connection from "../connection";
import { Product } from "../types";

const insertProduct = async (product: Product): Promise<any> => {
	await connection("labecommerce_products")
		.insert(product)
}

export default insertProduct;