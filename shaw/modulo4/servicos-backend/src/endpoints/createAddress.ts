import { Request, Response } from "express";
import insertAddress from "../data/insertAddress";

const createAddress = async (req: Request, res: Response) => {
  let errorCode = 400;
  try {
    let cep = Number(req.params.cep);
    const { numero, complemento } = req.body;

    if (isNaN(cep)) {
      throw new Error("CEP deve ser um número")
    }
    await insertAddress(cep, numero, complemento);

    res.status(201).send("Address created successfully");
  } catch (error: any) {
    res.status(errorCode).send(error.sqlMessage || error.message);
  }
};

export default createAddress;