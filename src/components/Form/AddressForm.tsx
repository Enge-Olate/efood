import { useFormContext } from "react-hook-form";
import type{ DeliveryFormData } from "../../deliveryFormSchema";

export default function AddressForm(){
    const {register, formState:{errors}} = useFormContext<DeliveryFormData>();
    const addresErrors = errors.delivery?.address;
    return(
        <fieldset>
            <legend>
                Entrega
            </legend>
            <div>
                <label htmlFor="address-description">Endereço</label>
                <input id="addres-description" type="text" {...register("delivery.address.description")}/>
                {addresErrors?.description &&(
                    <span>{addresErrors.description.message}</span>
                )}
            </div>
            <div>
                <label htmlFor="address-city">Cidade</label>
                <input id="addres-city" type="text" {...register("delivery.address.city")}/>
                {addresErrors?.city &&(
                    <span>{addresErrors.city.message}</span>
                )}
            </div>
            <div>
                <label htmlFor="addres-zipCode">Cep</label>
                <input id="addres-zipCode" type="text" {...register("delivery.address.zipCode")}/>
                {addresErrors?.zipCode &&(
                    <span>{addresErrors.zipCode.message}</span>
                )}
            </div>
            <div>
                <label htmlFor="addres-number">Número</label>
                <input id="addres-number" type="number" {...register("delivery.address.number")}/>
                {addresErrors?.number &&(
                    <span>{addresErrors.number.message}</span>
                )}
            </div>
            <div>
                <label htmlFor="addres-complemente">Complemento</label>
                <input id="addres-complement" type="text" {...register("delivery.address.complement")}/>
                {addresErrors?.complement &&(
                    <span>{addresErrors.complement.message}</span>
                )}
            </div>
            
            
        </fieldset>
    )
}