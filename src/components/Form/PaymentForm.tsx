import { useFormContext } from "react-hook-form";
import type { PaymentFormData } from "../../paymentFormSchema";
import { ContainerForm, Row } from "./style";

export default function PaymentForm() {
  const {
    register,
    formState: { errors },
  } = useFormContext<PaymentFormData>();
  const paymentErrors = errors.payment;

  return (
    <ContainerForm>
      <label htmlFor="payment-name">Nome no cartão</label>
      <input id="payment-name" type="text" {...register("payment.card.name")} />
      {paymentErrors?.card?.name && (
        <span>{paymentErrors?.card?.name?.message}</span>
      )}

      <Row>
        <div className="number_card">
          <label htmlFor="payment-number">Número do cartão</label>
          <input
            id="payment-number"
            type="text"
            {...register("payment.card.number")}
          />
          {paymentErrors?.card?.number && (
            <span>{paymentErrors?.card?.number?.message}</span>
          )}
        </div>
        <div className="number_cvv">
          <label htmlFor="payment-code">CVV</label>
          <input
            id="payment-code"
            type="text"
            {...register("payment.card.code")}
          />
          {paymentErrors?.card?.code && (
            <span>{paymentErrors?.card?.code?.message}</span>
          )}
        </div>
      </Row>
      <Row>
        <div>
          <label htmlFor="payment-month">Mês de vencimento</label>
          <input
            id="payment-month"
            type="text"
            {...register("payment.expires.month")}
          />
          {paymentErrors?.expires?.month && (
            <span>{paymentErrors?.expires.month.message}</span>
          )}
        </div>
        <div>
          <label htmlFor="payment-year">Ano de vencimento</label>
          <input
            id="payment-year"
            type="text"
            {...register("payment.expires.year")}
          />
          {paymentErrors?.expires?.year && (
            <span>{paymentErrors?.expires.year.message}</span>
          )}
        </div>
      </Row>
    </ContainerForm>
  );
}
