import { Request, Response } from "express";
import dataFunction from "../data/dataFunction";

const endpointFunction = async (req: Request, res: Response) => {
  let errorCode = 400;
  try {
    const result = await dataFunction();
    res.send(result);

  } catch (error: any) {
    res.status(errorCode).send(error.sqlMessage || error.message);
  }
};

export default endpointFunction;