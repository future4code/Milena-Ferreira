import { Request, Response } from "express"
import selectAllUsers from "../data/selectAllUsers"

export const getAllUsers = async (req: Request, res: Response): Promise<void> => {
  try {
    const name: string = req.query.name as string;
    let order = req.query.order as string;
    let sort = req.query.sort as string;

    if (sort.toLowerCase() !== "name"
      && sort.toLowerCase() !== "type") {
      sort = "email";
    }

    if (order.toLowerCase() !== "asc"
      && order.toLowerCase() !== "desc") {
      order = "asc";
    }

    const users = await selectAllUsers(name)

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