import { Request, Response } from "express";
import selectUser from "../data/selectUser";

const getUserById = async (req: Request, res: Response) => {
  let errorCode = 400;
  try {
    const id: string = req.params.id as string;

    const user = await selectUser(id);

    res.status(200).send(user);

  } catch (error: any) {
    res.status(errorCode).send(error.sqlMessage || error.message);
  }
};

export default getUserById;