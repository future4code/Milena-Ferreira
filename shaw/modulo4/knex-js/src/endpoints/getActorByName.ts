import { Request, Response } from "express";
import selectActorByName from "../data/selectActorByName";

const getActorByName = async (req: Request, res: Response) => {
  let errorCode = 400;
  try {
    const name: string = req.query.name as string;

    const actor = await selectActorByName(name as string);

    if (actor.length === 0) {
      throw new Error("User not found")
    } else {
      res.status(200).send(actor);
    }
  } catch (error: any) {
    res.status(errorCode).send(error.sqlMessage || error.message);
  }
};

export default getActorByName;