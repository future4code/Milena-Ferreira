import express, { Request, Response } from "express";
import cors from "cors";
import { produto, produtos } from "./data";

const app = express();

// Exercício 1
app.get("/test", (req: Request, res: Response) => {
  res.status(200).send("Funcionou!");
});

// Exercício 3
app.post("/produto/novo", (req: Request, res: Response) => {
  // const { id, name, price } = req.body;
  // produtos.push({ id, name, price });

  const produto: produto = {
    id: req.body.id,
    name: req.body.name,
    price: req.body.price
  }

  produtos.push(produto);

  res.status(201).send(produtos);
});

// Exercício 4
// Exercício 5
// Exercício 6
// Exercício 7
// Exercício 8
// Exercício 9

app.use(express.json());
app.use(cors());

app.listen(3003, () => {
  console.log("Server is running in http://localhost:3003");
});