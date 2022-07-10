import { Request, Response } from "express";
import selectUsers from "../data/selectUsers";
import { User } from "../types/User";

const getUsers = async (req: Request, res: Response) => {
  let errorCode = 400;
  try {
    const users: User[] = await selectUsers();

    res.status(200).send(users);
  } catch (error: any) {
    res.status(errorCode).send(error.sqlMessage || error.message);
  }
};

export default getUsers;