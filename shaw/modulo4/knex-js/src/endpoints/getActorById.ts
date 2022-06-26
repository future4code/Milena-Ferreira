import { Request, Response } from "express";
import selectActorById from "../data/selectActorById";

const getActorById = async (req: Request, res: Response) => {
  let errorCode = 400;
  try {
    const id: string = req.params.id;

    const actor = await selectActorById(id);

    res.status(200).send(actor);
  } catch (error: any) {
    res.status(errorCode).send(error.sqlMessage || error.message);
  }
};

export default getActorById;