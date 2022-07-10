import { Address } from "../types/Address";
import axios from "axios";

const getFullAddress = async (cep: number): Promise<any> => {
  const result = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);

  return {
    logradouro: result.data.logradouro,
    bairro: result.data.bairro,
    cidade: result.data.localidade,
    estado: result.data.uf
  }
};

export default getFullAddress;