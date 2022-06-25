import { Request, Response } from "express";
import app from "./app";
import connection from "./connection";

const getActorByName = async (name: string): Promise<object[]> => {
  const result = await connection.raw(`
    SELECT * FROM Actor WHERE name = "${name}";
  `);

  return result[0];
};

const countActorsByGender = async (gender: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT gender, COUNT(*) as count FROM Actor WHERE gender = "${gender}";
  `)

  return result[0];
};

app.get("/actor", async (req: Request, res: Response) => {
  let errorCode = 400;
  try {
    const gender: string = req.query.gender as string;

    const countActors = await countActorsByGender(gender);

    res.status(200).send(countActors);
  } catch (error: any) {
    res.status(errorCode).send(error.sqlMessage || error.message);
  }
});

app.get("/actor/:name", async (req: Request, res: Response) => {
  let errorCode = 400;
  try {
    const name: string = req.params.name;

    const actor = await getActorByName(name as string);

    if (actor.length === 0) {
      throw new Error("User not found")
    } else {
      res.status(200).send(actor);
    }
  } catch (error: any) {
    res.status(errorCode).send(error.sqlMessage || error.message);
  }
});