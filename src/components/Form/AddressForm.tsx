
import {IMaskInput} from "react-imask";
import { Controller, useFormContext } from "react-hook-form";
import type { DeliveryFormData } from "../../deliveryFormSchema";
import { ContainerForm, Row } from "./style";

export default function AddressForm() {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext<DeliveryFormData>();
  const addresErrors = errors.delivery?.address;
  return (
    <ContainerForm>
      <label htmlFor="address-description">Endereço</label>
      <input
        id="addres-description"
        type="text"
        {...register("delivery.address.description")}
      />
      {addresErrors?.description && (
        <span>{addresErrors.description.message}</span>
      )}

      <label htmlFor="address-city">Cidade</label>
      <input
        id="addres-city"
        type="text"
        {...register("delivery.address.city")}
      />
      {addresErrors?.city && <span>{addresErrors.city.message}</span>}
      <Row>
        <div>
          <label htmlFor="addres-zipCode">Cep</label>
          <Controller
            control={control}
            name="delivery.address.zipCode"
            render={({ field })=>(
              <IMaskInput
                {...field}
                id="addres-zipCode"
                mask="00000-000"
                onAccept={(value: unknown)=>
                  field.onChange(value as string)
                }
              />
            )}
          />
          {addresErrors?.zipCode && <span>{addresErrors.zipCode.message}</span>}
        </div>

        <div>
          <label htmlFor="addres-number">Número</label>
          <input
            id="addres-number"
            type="number"
            {...register("delivery.address.numberHouse")}
          />
          {addresErrors?.numberHouse && (
            <span>{addresErrors.numberHouse.message}</span>
          )}
        </div>
      </Row>

      <label htmlFor="addres-complemente">Complemento</label>
      <input
        id="addres-complement"
        type="text"
        {...register("delivery.address.complement")}
      />
      {addresErrors?.complement && (
        <span>{addresErrors.complement.message}</span>
      )}
    </ContainerForm>
  );
}
