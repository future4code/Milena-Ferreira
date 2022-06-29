import { Request, Response } from "express";
import deleteActor from "../data/deleteActor";

const removeActor = async (req: Request, res: Response) => {
  let errorCode = 400;
  try {
    const id: string = req.params.id as string;

    await deleteActor(id);

    res.status(200).send("User successfully deleted");
  } catch (error: any) {
    res.status(errorCode).send(error.sqlMessage || error.message);
  }
};

export default removeActor;