import { Request, Response } from "express";
import insertActor from "../data/insertActor";

const createActor = async (req: Request, res: Response) => {
  let errorCode = 400;
  try {
    const { name, salary, birth_date, gender } = req.body;
    const id: string = Date.now().toString();

    await insertActor(id, name, salary, birth_date, gender);

    res.status(201).send("User created successfully");
  } catch (error: any) {
    res.status(errorCode).send(error.sqlMessage || error.message);
  }
};

export default createActor;