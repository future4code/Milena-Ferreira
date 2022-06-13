import express, { Express, Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { Account, accounts, statement } from "./data";
const app: Express = express();

app.use(express.json());
app.use(cors());

app.get("/accounts", (req: Request, res: Response) => {
  let errorCode = 400;
  try {
    res.status(200).send(accounts);
  } catch (error: any) {
    res.status(errorCode).send({ message: error.message })
  }
})

app.post("/accounts", (req: Request, res: Response) => {
  let errorCode = 400;
  try {
    const { name, cpf, birthDate } = req.body;

    if (!name || !cpf || !birthDate) {
      res.status(400);
      throw new Error("Please check that all fields be filled up.")
    }

    const newAccount: Account = { name, cpf, birthDate, balance: 0, statement: [] };

    accounts.push(newAccount);

    res.status(201).send({ message: "Account created successfully" });
  } catch (error: any) {
    res.status(errorCode).send({ message: error.message })
  }

})

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`)
  } else {
    console.error(`Failure upon starting server.`);
  }
})