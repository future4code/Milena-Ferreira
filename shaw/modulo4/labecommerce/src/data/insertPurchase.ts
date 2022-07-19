import connection from "../connection";
import { Purchase } from "../types/Purchase";

const insertPurchase = async (purchase: Purchase): Promise<void> => {
  await connection("labecommerce_purchases")
    .insert(purchase);
};

export default insertPurchase;