import { Request, Response } from "express";
import { Purchase } from "../types/Purchase";
import selectPurchase from "../data/selectPurchase";

const getPurchase = async (req: Request, res: Response) => {
  let errorCode = 400;
  try {
    let id: string = req.params.id as string;

    if (!id) {
      id = "";
    }

    const purchases: Purchase[] = await selectPurchase(id);

    res.status(200).send(purchases);
  } catch (error: any) {
    res.status(errorCode).send(error.sqlMessage || error.message);
  }
};

export default getPurchase;