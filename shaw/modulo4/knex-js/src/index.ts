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

const updateSalaryById = async (
  id: string,
  salary: number
): Promise<void> => {
  await connection("Actor")
    .update({ salary })
    .where({ id });
}

const deleteActorById = async (id: string): Promise<void> => {
  await connection("Actor")
    .delete()
    .where({ id });
};

const getAverageSalaryByGender = async (gender: string): Promise<any> => {
  const result = await connection("Actor")
    .avg(`salary as average_salary`)
    .where({ gender });

  return result;
};

app.get("/actor/count", async (req: Request, res: Response) => {
  let errorCode = 400;
  try {
    const gender: string = req.query.gender as string;

    const countActors = await countActorsByGender(gender);

    res.status(200).send(countActors);
  } catch (error: any) {
    res.status(errorCode).send(error.sqlMessage || error.message);
  }
});

app.get("/actor/salary", async (req: Request, res: Response) => {
  let errorCode = 400;
  try {
    const gender: string = req.query.gender as string;

    const averageSalary = await getAverageSalaryByGender(gender);

    res.status(200).send(averageSalary);
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

app.put("/actor", async (req: Request, res: Response) => {
  let errorCode = 400;
  try {
    const { id, salary } = req.body;

    await updateSalaryById(id, salary);

    res.status(200).send("Salary updated successfully");

  } catch (error: any) {
    res.status(errorCode).send(error.sqlMessage || error.message);
  }
})

app.delete("/actor/:id", async (req: Request, res: Response) => {
  let errorCode = 400;
  try {
    const id: string = req.params.id as string;

    await deleteActorById(id);

    res.status(200).send("User successfully deleted");
  } catch (error: any) {
    res.status(errorCode).send(error.sqlMessage || error.message);
  }
});