import express, { Request, Response } from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

// Exercício 1
app.get("/ping", (req: Request, res: Response) => {
  res.status(200).send("Pong");
});

// Exercício 2
type afazer = {
  userId: number,
  id: number,
  title: string,
  completed: boolean
}

// Exercício 3
const afazeres: Array<afazer> = [
  {
    "userId": 1,
    "id": 1,
    "title": "estudar",
    "completed": true
  },
  {
    "userId": 2,
    "id": 2,
    "title": "lavar louça",
    "completed": true
  },
  {
    "userId": 1,
    "id": 3,
    "title": "dar ração para os gatos",
    "completed": true
  },
  {
    "userId": 2,
    "id": 4,
    "title": "lavar roupa",
    "completed": true
  },
  {
    "userId": 2,
    "id": 5,
    "title": "fazer compras",
    "completed": false
  },
  {
    "userId": 2,
    "id": 6,
    "title": "fazer almoço",
    "completed": false
  }
];

// Exercício 4
app.get("/afazeres", (req: Request, res: Response) => {
  const status: string = String(req.query.status).toLowerCase();
  let isCompleted: boolean;

  if (status === "completed") isCompleted = true;
  else isCompleted = false;

  const afazeresFiltrados = afazeres.filter((afazer) => {
    return afazer.completed === isCompleted;
  });

  res.status(200).send(afazeresFiltrados);
});

// Exercício 5
app.post("/afazeres/novo", (req: Request, res: Response) => {
  const novoAfazer: afazer = req.body;

  afazeres.push(novoAfazer);

  res.status(200).send(afazeres);
})

// Exercício 6
// app.put("/afazeres/:id", (req: Request, res: Response) => {
//   const id: number = Number(req.params.id);

//   const procuraAfazer: afazer | undefined = afazeres.find((afazer) => {
//     return afazer.id === id;
//   });

//   if (typeof (procuraAfazer !== undefined)) {
//     const afazerEditado: afazer = {...procuraAfazer, completed: !procuraAfazer?.completed};
//     res.status(200).send(afazerEditado);
//   } else {
//     res.send("Erro: id não encontrado");
//   }
// });

// Exercício 7

// Exercício 8
// Exercício 9

app.listen(3003, () => {
  console.log("Server is running in http://localhost:3003");
})