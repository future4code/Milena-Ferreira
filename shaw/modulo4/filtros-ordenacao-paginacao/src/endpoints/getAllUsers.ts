import { Request, Response } from "express"
import selectAllUsers from "../data/selectAllUsers"

export const getAllUsers = async (req: Request, res: Response): Promise<void> => {
  try {
    const name: string = req.query.name as string;
    const userType: string = req.query.type as string

    const users = await selectAllUsers(name, userType)

    if (users.length < 1) {
      res.statusCode = 404
      throw new Error("User not found")
    }

    res.status(200).send(users)

  } catch (error: any) {
    console.log(error)
    res.send(error.message || error.sqlMessage)
  }
}