import connection from "../connection";

const selectProducts = async (id?: string): Promise<any> => {

	if (id) {
		const result = await connection("labecommerce_products")
			.where({ id })

		return result;
	}

	const result = await connection("labecommerce_products")
		.select()

	return result;
}

export default selectProducts;