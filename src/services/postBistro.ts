import { api } from "./api";

export const postBistro = async(
    payload: CheckoutPurchase):Promise<CheckoutPurchase>=>{
        const {data} = await api.post<CheckoutPurchase>("checkout", payload);
        return data;
    }