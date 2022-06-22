import { Request, Response } from "express";
import app from "./app";
import connection from "./connection";

app.get("/", (req: Request, res: Response) => {
  res.send("Funcionou");
})

const getActorByName = async (name: string): Promise<object[]> => {
  const result = await connection.raw(`
    SELECT * FROM Actor WHERE name = "${name}";
  `);

  return result[0];
}

app.get("/actor", async (req: Request, res: Response) => {
  let errorCode = 400;
  try {
    const name = req.query.name;

    const result = await getActorByName(name as string);

    if (result.length === 0) {
      throw new Error("User not found")
    } else {
      res.status(200).send(result);
    }
  } catch (error: any) {
    res.status(errorCode).send(error.sqlMessage || error.message);
  }
});