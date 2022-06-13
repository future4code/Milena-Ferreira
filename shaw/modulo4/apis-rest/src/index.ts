import express, { Request, Response } from "express";
import cors from "cors";
import { users, User, ROLES } from "./data";

import { AddressInfo } from "net";

const app = express();

app.use(express.json());
app.use(cors());

// Exercício 1
// a) Método GET
// b) Pelo path

app.get("/users", (req: Request, res: Response) => {
  let errorCode = 400;
  try {
    res.status(200).send(users);
  } catch (error: any) {
    res.status(errorCode).send({ message: error.message });
  }
});

// Exercício 2
// Exercício 
// Exercício 

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Serverg is running in http://localhost:${address.port}`);
  } else {
    console.log(`Failure upon starting server.`);
  }
})
