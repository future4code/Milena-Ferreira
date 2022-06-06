import axios from "axios";
import { Address } from "../types";

export const getAddressInfo = async (cep: string): Promise<Address> => {

    const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/  `);

    return {
        logradouro: response.data.logradouro,
        bairro: response.data.bairro,
        localidade: response.data.localidade,
        uf: response.data.uf
    };
}