import type { Product } from "../types";
import { api } from "./api";

export const getIdBistro = async (id: number): Promise<Product>=>{
    const {data} = await api.get<Product[]>('restaurantes',{
        params: {id}
    });
    return data[0];
}