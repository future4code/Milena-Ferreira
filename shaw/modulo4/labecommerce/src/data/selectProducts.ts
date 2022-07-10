import connection from "../connection";
import { Product } from "../types/Product";


const selectProducts = async (): Promise<Product[]> => {
  const products: Product[] = await connection("labecommerce_products")
    .select("*");

  return products;
};

export default selectProducts;