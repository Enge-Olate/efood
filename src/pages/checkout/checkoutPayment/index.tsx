import { FormProvider, useForm } from "react-hook-form";
import { CheckoutLayout } from "../../../components/CheckoutLayout";
import { useAppDispatch } from "../../../hooks/appDispatch";
import { useAppSelector } from "../../../hooks/appSelector";
import type { RootState } from "../../../store";
import { close, setStep } from "../../../store/reducers/cart";
import { ContainerForm } from "../../../components/Form/style";
import {
  paymentFormSchema,
  type PaymentFormData,
} from "../../../paymentFormSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import PaymentForm from "../../../components/Form/PaymentForm";
import Button from "../../../components/Button";

export default function CheckoutPayment() {
  const { isOpen } = useAppSelector((state: RootState) => state.cart);
  const dispatch = useAppDispatch();
  const closeCart = () => {
    dispatch(close());
  };
  const goToDelivery=()=>{
    dispatch(setStep("delivery"))
  }
  const goToConfirmation=()=>{
    dispatch(setStep("confirmation"))
  }
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
  });
  return (
    <CheckoutLayout isOpen={isOpen} onClose={closeCart}>
      <FormProvider {...methods}>
        <ContainerForm>
          <h4>Pagamento - Valor a pagar </h4>
          <PaymentForm />
          <Button
            type="submit"
            variant="primary"
            title="Finalizar pagamento"
            onClick={goToConfirmation}
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
