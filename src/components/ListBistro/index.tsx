import { useEffect, useState } from "react";
import Bistro from "../Bistro";
import { ContainerListBistro } from "./style";
import { Container } from "../../globalStyle";
import type { Product } from "../../types";
import { api } from "../../services/api";
export default function ListBistro() {
  const [bistros, setBistros] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    api.get<Product[]>('restaurantes')
    .then((res)=>{
      setBistros(res.data)
      console.log(res);
    })
    .catch((error)=>{console.log("Erro: ", error)})
    .finally(()=> setLoading(false));
  },[])
  if(loading)return <Container><h3>Carregando...</h3></Container>
  return (
    <Container>
      <ContainerListBistro>
        {bistros.map((bistro)=>
          <Bistro key={bistro.id}
            name={bistro.titulo}
            image={bistro.capa}
            tipo={bistro.tipo}
            rating={bistro.avaliacao}
            description={bistro.descricao}
            tags={bistro.destacado? ["Destaque", bistro.tipo]: [bistro.tipo]}
          />
        )}
          
      </ContainerListBistro>
    </Container>
  );
}
