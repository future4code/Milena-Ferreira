import { Request, Response } from "express"
import selectUsersSort from "../data/selectUsersSort"

export const getUsersSort = async (req: Request, res: Response): Promise<void> => {
  try {
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

    const users = await selectUsersSort(order, sort)

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