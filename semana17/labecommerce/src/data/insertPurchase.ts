import connection from "../connection";

const insertPurchase = async (
	id: string,
	userId: string,
	productId: string,
	quantity: number,
	totalPrice: number
): Promise<any> => {
	await connection("labecommerce_purchases")
		.insert({
			id,
			user_id: userId,
			product_id: productId,
			quantity,
			total_price: totalPrice,
		})
}

export default insertPurchase;