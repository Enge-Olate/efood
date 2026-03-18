import { api } from "./api";

export const postBistro = async(
    payload: CheckoutPurchase):Promise<FoodSelled>=>{
        const {data} = await api.post<FoodSelled>("checkout", payload);
        return data;
    }