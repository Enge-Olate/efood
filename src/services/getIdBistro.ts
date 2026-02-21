import type { Product } from "../types";
import { api } from "./api";

export const getIdBistro = async (id: number): Promise<Product>=>{
    try {
        const { data } = await api.get<Product[]>('restaurantes');
        const findBistro = data.find((item)=> item.id === id);
        if(!findBistro){
            throw new Error('Restaurante não encontrado');
        }
        console.log(findBistro);
        return findBistro;
    } catch (error) {
        console.error('Erro: ', error);
        throw error;
    }    
};