import { FormProvider, useForm } from "react-hook-form";
import { CheckoutLayout } from "../../../components/CheckoutLayout";
import { useAppDispatch } from "../../../hooks/appDispatch";
import { useAppSelector } from "../../../hooks/appSelector";
import type { RootState } from "../../../store";
import { close, setStep } from "../../../store/reducers/cart";
import type { DeliveryFormData } from "../../../deliveryFormSchema";
import { deliveryFormSchema } from "../../../deliveryFormSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import AddressForm from "../../../components/Form/AddressForm";
import Button from "../../../components/Button";
import { ContainerForm } from "../../../components/Form/style";

export default function CheckoutDelivery() {
  const { isOpen } = useAppSelector((state: RootState) => state.cart);
  const dispatch = useAppDispatch();
  const closeCart = () => {
    dispatch(close());
  };
  const goToCart = () => {
      dispatch(setStep("cart"));
    };
  const goToPayment = () => {
      dispatch(setStep("payment"))
    };
  const methods = useForm<DeliveryFormData>({
    resolver: yupResolver(deliveryFormSchema),
    defaultValues: {
      delivery: {
        receiver: "",
        address: {
          description: "",
          city: "",
          zipCode: "",
          number: undefined,
          complement: "",
        },
      },
    },
    mode: "onBlur",
  });
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = methods;

  const onSubmit = (data: DeliveryFormData) => ({
    data,
    // data.delivery.receiver,
    // data.delivery.address.description,
    // data.delivery.address.city,
    // data.delivery.address.zipCode,
    // data.delivery.address.zipCode,
    // data.delivery.address.number,
    // data.delivery.address.complement,
  });

  return (
    <CheckoutLayout isOpen={isOpen} onClose={closeCart}>
      <FormProvider {...methods}>
          <ContainerForm onSubmit={handleSubmit(onSubmit)}>
            <h4>Entrega</h4>
              <label htmlFor="receiver">Quem irá receber</label>
              <input
                id="receiver"
                type="text"
                {...register("delivery.receiver")}
              />
              {errors.delivery?.receiver && (
                <span>{errors.delivery.receiver.message}</span>
              )}
            <AddressForm />
            <Button
              type="submit"
              variant="primary"
              disabled={isSubmitting}
              title="Continuar com o pagamento"
              onClick={goToPayment}
            />
            <Button
              type="button"
              variant="primary"
              title="Voltar para o carrinho"
              onClick={goToCart}
            />
          </ContainerForm>
      </FormProvider>
    </CheckoutLayout>
  );
}
