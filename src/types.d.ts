import type { DeliveryFormData } from "./deliveryFormSchema";

declare type CheckoutStep =
 "cart"|"delivery"|"payment"|"confirmation";


declare interface BannerProps{
    imagem:string;
    titleGen?:string;
    titleBistro?:string
}
declare interface BistroProps{
  name: string;
  image: string;
  rating: number;
  description: string;
  destacado?: boolean;
  tipo: string;
  tags:string[];
  id: number;
}
declare interface ModalProps{
  isVisible: boolean;
  closeModal: () => void;
  item: MenuItem | null;
};
declare interface HeaderProps {
  variant?: HeaderVariant;
  infoCar?: string;
  text?: string;
  logo: string;
  title?: string;
  Click?: ()=> void;
  variant: "home" | "default"
}
declare interface LoaderProps{
  title?: string;
}
declare interface cartFoodState {
  items: MenuItem[],
  isOpen: boolean,
  step:CheckoutStep,
  delivery?: DeliveryFormData["delivery"];
<<<<<<< HEAD
=======
  orderId?: string;
>>>>>>> 691ae7d583aea266f4b1461e913bd18f1ed6b450
}

declare interface Product {
  id: number;
  titulo: string;
  destacado: boolean;
  tipo: string;
  avaliacao: number;
  descricao: string;
  capa: string;
  cardapio: MenuItem[];
}

declare interface MenuItem {
  id: number;
  foto: string;
  preco: number;
  nome: string;
  descricao: string;
  porcao: string;
}
declare interface CheckoutProduct{
  id:number;
  price: number;
}
declare interface CheckoutPurchase {
  products: CheckoutProduct[];
   delivery:{
    receiver: string;
    address:{
      description:string;
      city:string;
      zipCode:string;
      numberHouse:number;
      complement: string | null;
    },
  },
  payment:{
    card:{
      name: string;
      number: string;
      code: number;
      expires:{
        month:number;
        year:number;
      }
    }
  }

}