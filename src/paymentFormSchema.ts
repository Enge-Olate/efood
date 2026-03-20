import * as yup from "yup";
export const paymentFormSchema = yup.object({
    payment: yup.object({
        card: yup.object({
            name:
                yup.string()
                    .required("Nome do cartão é obrigatório."),
            number:
                yup.string()
                    .required("Número do cartão é obrigatório."),
            code:
                yup.number()
                    .required("CVV é obrigatório.")
                    .min(9, "Verifique o número correto!")
                    .max(9999, "Verifique o número correto!")
                    .integer("O código não pode ter casas decimais.")
                    .typeError("Apenas números."),
        }),
        expires: yup.object({
            month:
                yup.number()
                    .required("Campo obrigatório")
                    .min(1, "O mês deve estar entre 1 e 12.")
                    .max(12, "O mês deve estar entre 1 e 12.")
                    .typeError("Apenas números!"),
            year:
                yup.number()
                    .required("Campo obrigatório.")
                    .integer()
                    .min(new Date().getFullYear(), "Verifique!")
                    .max(9999, "Deve ter quatro dígitos!")
                    .typeError("Ano inválido!"),

        }),
    }),
});
export type PaymentFormData = yup.InferType<typeof paymentFormSchema>;