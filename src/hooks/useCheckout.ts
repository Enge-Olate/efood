import { useMutation } from "@tanstack/react-query";
import { postBistro, type CheckoutResponse } from "../services/postBistro";
import toast from "react-hot-toast";
import type { CheckoutPurchase} from "../types";
import { colors } from "../globalStyle";
type CheckoutContext = {
    toastId: string;
}

export function useCheckout() {
    return useMutation<
       CheckoutResponse,
        Error,
        CheckoutPurchase,
        CheckoutContext
    >
        ({
            mutationFn: postBistro,
            onMutate: () => {
                const toastId = toast.loading("Processando compra...");
                return { toastId }
            },
            onSuccess: (_data, _variables, context) => {
                if (context?.toastId) {
                    toast.success("Compra finalizada com sucesso!", {
                        id: context.toastId,
                        duration:4000,
                        style:{
                            backgroundColor:`${colors.orangePale}`,
                            color:`${colors.colorFontTomato}`,
                        }
                    });
                }
            },
            onError: (error, _variables, context) => {
                if (context?.toastId) {
                    toast.error(error.message, {id: context.toastId});
                }
            }
        });
}