import * as yup from "yup";
export const paymentFormSchema = yup.object({
    payment: yup.object({
        card:yup.object({
            name:yup.string().required("Nome no cartão é obrigatório"),
            number:yup.string().required("Número do cartão é obrigatório"),
            code:yup.number().required("CVV é obrigatório").min(3),
        }),
        expires:yup.object({
            month:yup.number().required("Campo obrigatório").min(1).max(12),
            year:yup.number().required("Campo obrigatório").min(4),

        }),
    }),
});
export type PaymentFormData = yup.InferType< typeof paymentFormSchema>;