import type { CheckoutPurchase} from "../types";
import { api } from "./api";
export type CheckoutResponse={
  orderId: string;
}

export const postBistro = async(
    payload: CheckoutPurchase):Promise<CheckoutResponse>=>{
        const {data} = await api.post<CheckoutResponse>("checkout", payload);
        return data;
    }