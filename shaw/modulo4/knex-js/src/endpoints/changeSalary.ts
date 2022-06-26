import { Request, Response } from "express";
import updateSalary from "../data/updateSalary";

const changeSalary = async (req: Request, res: Response) => {
  let errorCode = 400;
  try {
    const { id, salary } = req.body;

    await updateSalary(id, salary);

    res.status(200).send("Salary updated successfully");

  } catch (error: any) {
    res.status(errorCode).send(error.sqlMessage || error.message);
  }
};

export default changeSalary;