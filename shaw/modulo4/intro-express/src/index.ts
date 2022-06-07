import express, { Request, Response } from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

// Exercício 1
app.get("/", (req: Request, res: Response) => {
  res.send("Funcionou!");
})

// Exercício 2
type user = {
  id: string | number,
  name: string,
  phone: number,
  email: string,
  website: string
}

// Exercício 3
const users: Array<user> = [
  {
    id: 1,
    name: "Tchumi",
    phone: 31995961111,
    email: "batatinha@gmail.com",
    website: "tchumi.com"
  },
  {
    id: 2,
    name: "Mia",
    phone: 31995962222,
    email: "mia@gmail.com",
    website: "mia_linda.com"
  },
  {
    id: 3,
    name: "Baguera",
    phone: 31995963333,
    email: "panterinha@gmail.com",
    website: "baguera.com",
  },
  {
    id: 4,
    name: "Tom Hanks",
    phone: 31995964444,
    email: "tonico_lindo@gmail.com",
    website: "tonico.com"
  },
  {
    id: 5,
    name: "Whiskas",
    phone: 31995965555,
    email: "whiskas@gmail.com",
    website: "whiskas.com"
  },
  {
    id: 6,
    name: "Frajola",
    phone: 31995936666,
    email: "frajolinha@gmail.com",
    website: "frajolinha.com"
  },
]

// Exercício 4
app.get("/users", (req: Request, res: Response) => {
  res.send(users);
});

// Exercício 5
type post = {
  id: string | number,
  title: string,
  body: string,
  userId: string | number
}

// Exercício 6
// É melhor criar o array de posts fora do de usuários, já que cada usuário pode escrever vários posts e assim fica mais fácil atualizar a lista.

const posts: Array<post> = [
  {
    id: 100,
    title: "Batatinha",
    body: "Eu sou o Tchumi, mas também me chamam de Batatinha, porque eu sou gordinho e baixinho como o personagem do desenho Manda Chuva",
    userId: 1
  },
  {
    id: 101,
    title: "Modelo",
    body: "Eu sou a Mia, sou gorda e muito linda. Por isso eu sou modelo pluss size.",
    userId: 2
  },
  {
    id: 102,
    title: "De Wakanda para o mundo",
    body: "Eu sou o Baguera, sou preto e meu pelo é maravilhoso. Era pra eu me chamar Ulisses, mas eu pareço uma pantera negra, então acabou ficando Baguera mesmo.",
    userId: 3
  },
  {
    id: 103,
    title: "Run Forrest, run!",
    body: "Meu nome é Tom Hanks, mas nem eu me lembro disso, porque quase todo mundo me chama de Tonico. Eu tenho os olhos azuissss - igual o Tom Hanks original",
    userId: 4
  },
  {
    id: 104,
    title: "Eu de novo",
    body: "Eu adoooooooro interagir com as pessoas!",
    userId: 3
  },
]

// Exercício 7
app.get("/posts", (req: Request, res: Response) => {
  res.send(posts)
})

// Exercícios 8
app.get("/posts/:user", (req: Request, res: Response) => {
  const userId = Number(req.params.user);

  const userPosts = posts.filter((post) => { return post.userId === userId })

  res.send(userPosts);
})

app.listen(3003, () => {
  console.log("Server running in http://localhost.3003");
})