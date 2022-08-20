import { Request, Response } from "express";
import { Purchase } from "../types/Purchase";
import selectPurchase from "../data/selectPurchase";

const getPurchase = async (req: Request, res: Response) => {
  let errorCode = 400;
  try {
    let userId: string = req.params.userId as string;

    if (!userId) {
      throw new Error("A user ID must be provided")
    }

    const purchases: Purchase[] = await selectPurchase(userId);

    res.status(200).send(purchases);
  } catch (error: any) {
    res.status(errorCode).send(error.sqlMessage || error.message);
  }
};

export default getPurchase;