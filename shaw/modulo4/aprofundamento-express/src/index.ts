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
app.put("/afazeres/:id", (req: Request, res: Response) => {
  const id: number = Number(req.params.id);

  const statusAtualizado: (afazer | undefined)[] = afazeres.map((afazer) => {
    if (afazer.id === id) {
      return {
        userId: afazer.userId,
        id: afazer.id,
        title: afazer.title,
        completed: !afazer.completed
      }
    }
  });

  res.send(statusAtualizado);
});

// Exercício 7
app.delete("/afazeres/:id", (req: Request, res: Response) => {
  const id: number = Number(req.params.id);

  const listaAtualizada = afazeres.map((afazer) => {
    if (afazer.id === id) {
      afazeres.splice(afazeres.indexOf(afazer), 1);
    }
    return afazeres;
  });

  res.status(200).send(listaAtualizada);
})

// Exercício 8
app.get("/users/:id", (req: Request, res: Response) => {
  const userId: number = Number(req.params.id);

  const tarefasUsuario: (afazer | undefined)[] = afazeres.filter((afazer) => {
    return userId === afazer.userId
  })

  res.status(200).send(tarefasUsuario);
})

// Exercício 9

app.listen(3003, () => {
  console.log("Server is running in http://localhost:3003");
})