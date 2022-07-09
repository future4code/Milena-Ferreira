import { Request, Response } from "express"
import selectAllUsers from "../data/selectAllUsers"

enum Type {
  TEACHER = "teacher",
  OPERATIONS = "operations",
  CX = "cx"
}

export const getAllUsers = async (req: Request, res: Response): Promise<void> => {
  try {
    const name: string = req.query.name as string;
    let type: string = req.query.type as string;
    let sort: string = req.query.sort as string;
    let order: string = req.query.order as string;
    let page: number = Number(req.query.page);
    const size: number = 5;

    if (type.toLowerCase() !== (Type.CX || Type.OPERATIONS || Type.TEACHER)) {
      type = "";
    }

    if (page < 1 || isNaN(page)) {
      page = 1;
    }

    const offset: number = (page - 1) * size;

    if (sort.toLowerCase() !== "name"
      && sort.toLowerCase() !== "type") {
      sort = "email";
    }

    if (order.toLowerCase() !== "asc"
      && order.toLowerCase() !== "desc") {
      order = "asc";
    }

    const users = await selectAllUsers(
      name,
      type,
      sort,
      order,
      size,
      offset
    );

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