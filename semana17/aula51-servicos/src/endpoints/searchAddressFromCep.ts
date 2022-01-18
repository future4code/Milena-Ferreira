import { Request, Response } from "express";
import { connection } from "../data/connection";
import { getAddressInfo } from "../services/getAddressInfo";
import { Address } from "../types";

export const searchAddressFromCep = async (
    req: Request,
    res: Response
): Promise<Address> => {
    const address: Address = await getAddressInfo(req.params.cep)
    return address;
}