import * as yup from "yup";
export const paymentFormSchema = yup.object({
    payment: yup.object({
        card:yup.object({
            name:yup.string().required("Nome no cartão é obrigatório"),
            number:yup.string().required("Número do cartão é obrigatório"),
            code:yup.number().required("CVV é obrigatório").min(3, "Deve conter apenas números"),
        }),
        expires:yup.object({
            month:yup.number().required("Campo obrigatório").min(2, "Deve ter apenas números"),
            year:yup.number().required("Campo obrigatório").min(4, "Deve ter apenas números"),

        }),
    }),
});
export type PaymentFormData = yup.InferType< typeof paymentFormSchema>;