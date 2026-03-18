declare interface cartFoodState {
  items: MenuItem[],
  isOpen: boolean,
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
declare interface FoodSelled{
  orderId:string;
    total:number;
    status: "pending" | "paid" | "failled";
    message?: string;
}
declare interface CheckoutPurchase {
  products: FoodSelled[];
   delivery:{
    receiver: string;
    address:{
      description:string;
      city:string;
      zipCode:string;
      numberHouse:number;
      complement: string
    }
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