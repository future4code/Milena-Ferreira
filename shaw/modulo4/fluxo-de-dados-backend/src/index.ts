import express, { Request, Response } from "express";
import cors from "cors";

const app = express();

// Exercício 1
app.get("/test", (req: Request, res: Response) => {
  res.status(200).send("Funcionou!");
})

// Exercício 2
// Exercício 3
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