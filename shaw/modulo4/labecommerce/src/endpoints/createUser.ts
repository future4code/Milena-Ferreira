import { Request, Response } from "express";
import insertUser from "../data/insertUser";
import { User } from "../types/User";

const createUser = async (req: Request, res: Response) => {
  let errorCode = 400;
  try {
    const id: string = Date.now().toString();
    const { name, email, password } = req.body;
    const user: User = { id, name, email, password }

    await insertUser(user);

    res.status(201).send("User successfully created");
  } catch (error: any) {
    res.status(errorCode).send(error.sqlMessage || error.message);
  }
};

export default createUser;