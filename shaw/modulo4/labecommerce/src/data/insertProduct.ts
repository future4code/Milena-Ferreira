import connection from "../connection";
import { Product } from "../types/Product";

const insertProduct = async (product: Product): Promise<void> => {
  await connection("labecommerce_products")
    .insert(product);
};

export default insertProduct;