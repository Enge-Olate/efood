import { FormProvider, useForm } from "react-hook-form";
import { CheckoutLayout } from "../../../components/CheckoutLayout";
import { useAppDispatch } from "../../../hooks/appDispatch";
import { useAppSelector } from "../../../hooks/appSelector";
import type { RootState } from "../../../store";
import { clearCart, close, setStep } from "../../../store/reducers/cart";
import { ContainerForm } from "../../../components/Form/style";
import {
  paymentFormSchema,
  type PaymentFormData,
} from "../../../paymentFormSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import PaymentForm from "../../../components/Form/PaymentForm";
import Button from "../../../components/Button";
import { postBistro } from "../../../services/postBistro";
import toast from "react-hot-toast";
import type { CheckoutProduct, CheckoutPurchase } from "../../../types";

export default function CheckoutPayment() {
  const { isOpen, items, delivery } = useAppSelector(
    (state: RootState) => state.cart,
  );
  const dispatch = useAppDispatch();
  const closeCart = () => {
    dispatch(close());
  };
  const goToDelivery = () => {
    dispatch(setStep("delivery"));
  };
  const methods = useForm<PaymentFormData>({
    resolver: yupResolver(paymentFormSchema),
    defaultValues: {
      payment: {
        card: {
          name: "",
          number: undefined,
          code: undefined,
        },
        expires: {
          month: undefined,
          year: undefined,
        },
      },
    },
    mode: "onBlur",
  });
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubimit = async (data: PaymentFormData) => {
    try {
      if (!delivery) {
        dispatch(setStep("delivery"));
        return;
      }
      const products: CheckoutProduct[] = items.map((item) => ({
        id: item.id,
        price: item.preco,
      }));
      const payload: CheckoutPurchase = {
        products,
        delivery: {
          receiver: delivery.receiver,
          address: {
            description: delivery.address.description,
            city: delivery.address.city,
            zipCode: delivery.address.zipCode,
            numberHouse: delivery.address.numberHouse,
            complement: delivery.address.complement,
          },
        },
        payment: {
          card: {
            name: data.payment.card.name,
            number: data.payment.card.number,
            code: Number(data.payment.card.code),
            expires: {
              month: data.payment.expires.month,
              year: data.payment.expires.year,
            },
          },
        },
      };
      const res = await postBistro(payload);
      
      if (res){
        toast.success("Sucesso, sua compra foi finalizada. Bom apetite!");
        dispatch(clearCart());
        dispatch(setStep("confirmation"));
      } 
    } catch (error) {
      if (error) toast.error("Erro ao processar o pagamento. Tente novamente.");
    }
  };
  return (
    <CheckoutLayout isOpen={isOpen} onClose={closeCart}>
      <FormProvider {...methods}>
        <ContainerForm onSubmit={handleSubmit(onSubimit)} noValidate>
          <h4>Pagamento - Valor a pagar </h4>
          <PaymentForm {...register} />
          <Button
            type="submit"
            variant="primary"
            title="Finalizar pagamento"
            disabled={isSubmitting}
          />
          <Button
            type="button"
            variant="primary"
            title="Voltar para a edição de endereço"
            onClick={goToDelivery}
          />
        </ContainerForm>
      </FormProvider>
    </CheckoutLayout>
  );
}
