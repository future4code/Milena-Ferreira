import connection from "../connection";

const selectProduct = async (size: number, offset: number): Promise<any> => {

	let query = `SELECT * FROM labecommerce_products
		LIMIT ${size}
		OFFSET ${offset}
		`

	const result = await connection.raw(query);

	return result;
}

export default selectProduct;  