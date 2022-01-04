import connection from "../connection";

const selectProduct = async (size: number, offset: number): Promise<any> => {

	let query = `SELECT * FROM labecommerce_products
		LIMIT ${size}
		OFFSET ${offset}
		`

	const result = await connection("labecommerce_products")
		.limit(size)
		.offset(offset);

	console.log("result 12", result);

	return result;
}

export default selectProduct;  