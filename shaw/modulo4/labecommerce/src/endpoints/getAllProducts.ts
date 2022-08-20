import { Request, Response } from "express";
import { Product } from "../types/Product";
import selectAllProducts from "../data/selectAllProducts";

const getAllProducts = async (req: Request, res: Response) => {
  let errorCode = 400;
  try {
    const products: Product[] = await selectAllProducts();

    res.status(200).send(products);
  } catch (error: any) {
    res.status(errorCode).send(error.sqlMessage || error.message);
  }
};

export default getAllProducts;