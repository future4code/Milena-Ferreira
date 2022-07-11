import { Request, Response } from "express";
import { Product } from "../types/Product";
import selectProductById from "../data/selectProductById";

const getProductById = async (req: Request, res: Response) => {
  let errorCode = 400;
  try {
    let productId: string = req.params.productId as string;

    if (!productId) {
      productId = "";
    }

    const products: Product[] = await selectProductById(productId);

    res.status(200).send(products);
  } catch (error: any) {
    res.status(errorCode).send(error.sqlMessage || error.message);
  }
};

export default getProductById;