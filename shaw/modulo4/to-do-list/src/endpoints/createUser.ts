import { Request, Response } from "express";
import insertUser from "../data/insertUser";

const createUser = async (req: Request, res: Response) => {
  let errorCode = 400;
  try {
    const { name, nickname, email } = req.body;
    const id: string = Date.now().toString();

    await insertUser(id, name, nickname, email);

    res.status(201).send("User created successfully");
  } catch (error: any) {
    res.status(errorCode).send(error.sqlMessage || error.message);
  }
};

export default createUser;