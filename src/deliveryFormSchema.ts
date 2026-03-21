import * as yup from 'yup';
export const deliveryFormSchema = yup.object({
    delivery: yup.object({
        receiver:
            yup.string()
                .required("O nome do recebedor é obrigatório."),
        address:
            yup.object({
                description:
                    yup.string()
                        .required("Descrição é obriratória."),
                city:
                    yup.string()
                        .required("Cidade é obrigatória."),
                zipCode:
                    yup.string()
<<<<<<< HEAD
                        .required("Cep é obrigatório."),
                        // .matches(/^[0-9]{5}-?[0-9]{3}$/, "CEP inválido, verifique!"),
=======
                        .required("Cep é obrigatório.")
                        .matches(/^[0-9]{5}-?[0-9]{3}$/, "CEP inválido, verifique!"),
>>>>>>> 691ae7d583aea266f4b1461e913bd18f1ed6b450
                numberHouse:
                    yup.number()
                        .required("Número é obrigatório.")
                        .typeError("Apenas números!")
                        .integer("Números sem casas decimais!")
                        .min(1, "Número precisa ser maior que zero!"),
                complement:
                    yup.string()
                        .nullable()
                        .transform((value) => value ?? "")
                        .default("")
            }),
    }),
});
export type DeliveryFormData = yup.InferType<typeof deliveryFormSchema>;

