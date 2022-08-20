import connection from "../connection";
import { Product } from "../types/Product";


const selectAllProducts = async (id?: string): Promise<Product[]> => {
  const products: Product[] = await connection("labecommerce_products")
    .select("*");

  return products;
};

export default selectAllProducts;