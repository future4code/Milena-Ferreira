import connection from "../connection";
import { Purchase } from "../types/Purchase";

const selectPurchase = async (id: string): Promise<Purchase[]> => {
  const products: Purchase[] = await connection({
    purchase: "labecommerce_purchases"
  })
    .select({
      product_id: "product.id",
      product_name: "prod.name",
      product_price: "prod.price",
      user_id: "user.id",
      user_name: "user.name",
      purchase_id: "purchase.id",
      quantity: "purchase.quantity",
      total_price: "purchase.total_price"
    })
    .join({ user: "labecommerce_users" }, "user_id", "=", "labecommerce_users.id")
    .join({ prod: "labecommerce_products" }, "product_id", "=", "labecommerce_products.id")
    .where({ id });

  return products;
};

export default selectPurchase;