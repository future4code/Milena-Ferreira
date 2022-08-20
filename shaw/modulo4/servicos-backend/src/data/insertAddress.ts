import connection from "../connection";
import getFullAddress from "../services/getFullAddress";
import axios from "axios";
import { Address } from "../types/Address";

const insertAddress = async (
  cep: number,
  numero: string,
  complemento: string
): Promise<void> => {
  const address: Address = await getFullAddress(cep);
  const { logradouro, bairro, cidade, estado } = address;

  await connection("servicos_endereco")
    .insert({
      cep,
      logradouro,
      numero,
      complemento,
      bairro,
      cidade,
      estado
    })
};

export default insertAddress;