import connection from "../connection";

const selectPurchase = async (userId: string): Promise<any> => {

	const result = await connection("labecommerce_purchases")
		.select({
			purchase_id: "labecommerce_purchases.id",
			user_id: "labecommerce_purchases.user_id",
			user_name: "labecommerce_users.name",
			product_id: "labecommerce_purchases.product_id",
			product_name: "labecommerce_products.name"
		})
		.where({ user_id: userId })
		.join("labecommerce_products", "labecommerce_purchases.product_id", "=", "labecommerce_products.id")
		.join("labecommerce_users", "labecommerce_purchases.user_id", "=", "labecommerce_users.id");

	return result;
}

export default selectPurchase;