import { Request, Response } from "express";
import insertProduct from "../data/insertProduct";
import { Product } from "../types/Product";

const createProduct = async (req: Request, res: Response) => {
  let errorCode = 400;
  try {
    const id: string = Date.now().toString();
    const { name, price, image_url } = req.body;
    const product: Product = { id, name, price, image_url }

    await insertProduct(product);

    res.status(201).send("Product successfully created");
  } catch (error: any) {
    res.status(errorCode).send(error.sqlMessage || error.message);
  }
};

export default createProduct;