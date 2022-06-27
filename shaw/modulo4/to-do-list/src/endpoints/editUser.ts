import { Request, Response } from "express";
import updateUser from "../data/updateUser";

const editUser = async (req: Request, res: Response) => {
  let errorCode = 400;
  try {
    const id: string = req.params.id as string;
    const { name, nickname, email } = req.body;

    if (name === "") {
      errorCode = 422;
      throw new Error("Cannot insert empty value on name");
    }
    if (nickname === "") {
      errorCode = 422;
      throw new Error("Cannot insert empty value on nickname");
    }
    if (email === "") {
      errorCode = 422;
      throw new Error("Cannot insert empty value on email");
    }

    if (!name && !nickname && !email) {
      errorCode = 422;
      throw new Error("A name, a nickname or an email must be provided");
    }

    await updateUser(id, name, nickname, email);

    res.status(200).send("User data successfully updated");
  } catch (error: any) {
    res.status(errorCode).send(error.sqlMessage || error.message);
  }
};

export default editUser;