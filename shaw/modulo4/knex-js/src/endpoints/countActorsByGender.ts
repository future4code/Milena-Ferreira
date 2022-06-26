import { Request, Response } from "express";
import selectCountActors from "../data/selectCountActors";

const countActorsByGender = async (req: Request, res: Response) => {
  let errorCode = 400;
  try {
    const gender: string = req.query.gender as string;

    const countActors = await selectCountActors(gender);

    res.status(200).send(countActors);
  } catch (error: any) {
    res.status(errorCode).send(error.sqlMessage || error.message);
  }
};

export default countActorsByGender;