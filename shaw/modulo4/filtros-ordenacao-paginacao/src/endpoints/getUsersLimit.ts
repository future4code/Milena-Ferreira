import { Request, Response } from "express"
import selectUsersLimit from "../data/selectUsersLimit"

export const getUsersLimit = async (req: Request, res: Response): Promise<void> => {
  try {
    let page = Number(req.query.page);

    if (page < 1 || isNaN(page)) {
      page = 1;
    }

    const size = 5;
    const offset = (page - 1) * size

    const users = selectUsersLimit(size, offset)
    res.status(200).send(users)

  } catch (error: any) {
    console.log(error)
    res.send(error.message || error.sqlMessage)
  }
}