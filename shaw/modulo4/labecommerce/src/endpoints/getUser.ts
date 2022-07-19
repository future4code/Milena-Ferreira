import { Request, Response } from "express";
import selectUser from "../data/selectUser";
import { User } from "../types/User";

const getUser = async (req: Request, res: Response) => {
  let errorCode = 400;
  try {
    const users: User[] = await selectUser();

    res.status(200).send(users);
  } catch (error: any) {
    res.status(errorCode).send(error.sqlMessage || error.message);
  }
};

export default getUser;