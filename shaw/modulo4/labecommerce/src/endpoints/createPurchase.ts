import { Request, Response } from "express";
import insertPurchase from "../data/insertPurchase";
import selectProductById from "../data/selectProductById";
import { Purchase } from "../types/Purchase";

const createPurchase = async (req: Request, res: Response) => {
  let errorCode = 400;
  try {
    const id: string = Date.now().toString();

    const { user_id, product_id, quantity } = req.body;
    const product = await selectProductById(product_id);
    const price = product[0].price;
    const totalPrice = price * quantity;
    const purchase: Purchase = { id, user_id, product_id, quantity, total_price: totalPrice }

    await insertPurchase(purchase);

    res.status(201).send("Purchase successfully created");
  } catch (error: any) {
    res.status(errorCode).send(error.sqlMessage || error.message);
  }
};

export default createPurchase;