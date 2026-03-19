import { useMutation } from "@tanstack/react-query";
import { postBistro } from "../services/postBistro";
import toast from "react-hot-toast";
type CheckoutContext = {
    toastId: string;
}
export function useCheckout() {
    return useMutation<
        CheckoutPurchase,
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
            onSuccess: (_data: CheckoutPurchase, _variables: CheckoutPurchase, context) => {
                if (context.toastId) {
                    toast.success("Compra finalizada com sucesso!", {
                        id: context.toastId,
                    });
                }
            },
            onError: (error, _variables, context) => {
                if (context?.toastId) {
                    toast.error(error.message ?? "Erro ao processar o pedido.", {
                        id: context.toastId
                    });
                }
            }
        });
}