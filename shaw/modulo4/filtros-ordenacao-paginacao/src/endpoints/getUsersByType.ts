import { Request, Response } from "express";
import selecUsersByType from "../data/selecUsersByType";

export const getUsersByType = async (req: Request, res: Response): Promise<void> => {
  try {
    const userType: string = req.params.name as string;

    const users = await selecUsersByType(userType)

    if (users.length < 1) {
      res.statusCode = 404
      throw new Error("User(s) not found")
    }

    res.status(200).send(users)
  } catch (error: any) {
    console.log(error)
    res.send(error.message || error.sqlMessage)
  }
}