import axios from "axios";
import { baseUrl } from "./baseUrl";

// Exercício 1
async function getAllSubscribers(): Promise<any[]> {
  const response: Array<any> = await axios.get(`${baseUrl}/news`);
  return response;
};

// Exercício 2
const getAllSubscribersArrow = async (): Promise<any[]> => {
  const response: Array<any> = await axios.get(`${baseUrl}/news`);
  return response;
};


const main = async (): Promise<void> => {
  try {
    const subscribers = await getAllSubscribers();
    console.log(subscribers)
  } catch (error: any) {

  }
}

main();