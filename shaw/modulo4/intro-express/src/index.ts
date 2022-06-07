import express, { Request, Response } from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

// Exercício 1

app.get("/", (req: Request, res: Response) => {
  res.send("Funcionou!");
})

app.listen(3003, () => {
  console.log("Server running in http://localhost.3003");
})