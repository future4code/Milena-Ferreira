import { Request, Response } from "express";
import avgSalary from "../data/avgSalary";

const getAvgSalary = async (req: Request, res: Response) => {
  let errorCode = 400;
  try {
    const gender: string = req.query.gender as string;

    const averageSalary = await avgSalary(gender);

    res.status(200).send(averageSalary);
  } catch (error: any) {
    res.status(errorCode).send(error.sqlMessage || error.message);
  }
};

export default getAvgSalary;