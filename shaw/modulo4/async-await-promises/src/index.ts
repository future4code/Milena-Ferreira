import axios from "axios";
import { baseUrl } from "./baseUrl";

type user = {
  id: string;
  name: string;
  email: string;
}

type news = {
  id: string,
  title: string,
  content: string,
  date: Date
}

async function getNews(): Promise<news[]> {
  const response = await axios.get(`${baseUrl}/news`);
  // return response.data
  return response.data.map((res: any) => {
    return {
      id: res.id,
      title: res.title,
      content: res.content,
      date: res.date
    };
  });
};

// Exercício 1
// a) get
// b) Promise<any[]>
// async function getAllSubscribers(): Promise<any[]> {
//   const response: Array<any> = await axios.get(`${baseUrl}/subscribers`);
//   return response;
// };

// Exercício 2
const getAllSubscribersArrow = async (): Promise<any[]> => {
  const response: Array<any> = await axios.get(`${baseUrl}/subscribers`);
  return response;
};

// Exercício 3
// a) sim, porque o tipo ainda não foi declarado
// b) para que os resultados da busca seja armazenados na ordem correta dentro de um array e não precisemos esperar a conclusão de cada requisição individualmente para a execução da próxima (o que demora muito)

async function getAllSubscribers(): Promise<user[]> {
  const response = await axios.get(`${baseUrl}/subscribers`);
  return response.data.map((res: any) => {
    return {
      id: res.id,
      name: res.name,
      email: res.email
    };
  });
};

// Exercício 4
// a) put, porque ela verifica se já existe um dado correspondente e, se não houver, o cria
// b)
async function createNews(
  title: string,
  content: string,
  date: Date
): Promise<void> {
  await axios.put(`${baseUrl}/`, {
    title,
    content,
    date
  });
}

// Exercício 5
async function notifyUsers(users: user[]): Promise<void> {
  users.map(async user => {
    await axios.post(`${baseUrl}/notifications`, {
      subscriberId: user.id,
      message: "Seja bem vindoooooo!"
    })
  })
  console.log("All notifications sent");
}

const main = async (): Promise<void> => {
  try {
    const subscribers = await getAllSubscribers();
    notifyUsers(subscribers);
    // createNews(
    //   "testando news",
    //   "lorem ipsum blablabla",
    //   new Date("2022-07-6")
    // );
    // const news = await getNews();
    // console.log(news);
  } catch (error: any) {

  }
}

main();