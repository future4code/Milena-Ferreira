import { Request, Response } from "express";
import insertTask from "../data/insertTask";

const createTask = async (req: Request, res: Response) => {
  let errorCode = 400;
  try {
    const { title, description, limitDate, creatorUserId } = req.body;
    const id: string = Date.now().toString();

    await insertTask(id, title, description, limitDate, creatorUserId);

    res.status(201).send("Task created successfully");
  } catch (error: any) {
    res.status(errorCode).send(error.sqlMessage || error.message);
  }
};

export default createTask;