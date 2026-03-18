import { api } from "./api";

export const getBistros = async():Promise<Product[]>=>{
    const {data} = await api.get<Product[]>('restaurantes');
    return data;
}