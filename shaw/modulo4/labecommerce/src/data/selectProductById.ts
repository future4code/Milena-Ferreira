import connection from "../connection";
import { Product } from "../types/Product";


const selectProductById = async (id?: string): Promise<Product[]> => {
  const products: Product[] = await connection("labecommerce_products")
    .select("*")
    .where({ id });

  return products;
};

export default selectProductById;