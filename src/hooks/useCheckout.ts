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
                const toastId = toast.loading("Processando compra...",{
                    duration: 3000,
                    position: "bottom-center",
                });
                return { toastId }
            },
            onSuccess: (_data, _variables, context) => {
                if (context?.toastId) {
                    toast.success("Compra finalizada com sucesso!", {
                        id: context.toastId,
                        duration:4000,
                        position:"bottom-center",
                        style:{
                            backgroundColor:`${colors.orangePale}`,
                            color:`${colors.colorFontTomato}`,
                        }
                    });
                }
            },
            onError: (error, _variables, context) => {
                if (context?.toastId) {
                    toast.error(error.message, {
                        duration:4000,
                        position:"bottom-center",
                        style:{
                            backgroundColor:`${colors.tomato}`,
                            color:`${colors.colorFontCream}`,
                        },
                        id: context.toastId});
                }
            }
        });
}