import connection from "../connection";

const insertProduct = async (
	id: string,
	name: string,
	price: number,
	imageUrl: string
): Promise<any> => {
	await connection("labecommerce_products")
		.insert({
			id,
			name,
			price,
			image_url: imageUrl
		})
}

export default insertProduct;