import { Request, Response } from "express";
import { Purchase } from "../types/Purchase";

const getPurchase = async (req: Request, res: Response) => {
  let errorCode = 400;
  try {
    let id: string = req.query.id as string;

    if (!id) {
      id = "";
    }

    const products: Product[] = await selectProduct(id);

    res.status(200).send(products);
  } catch (error: any) {
    res.status(errorCode).send(error.sqlMessage || error.message);
  }
};

export default getPurchase;