import { useEffect, useState } from "react";
import Bistro from "../Bistro";
import { ContainerListBistro } from "./style";
import { Container } from "../../globalStyle";
import type { Product } from "../../types";
import { getBistros } from "../../services/getBistros";
export default function ListBistro() {
  const [bistros, setBistros] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError]= useState<string | null>(null);
  useEffect(()=>{
    getBistros()
      .then(setBistros)
      .catch(()=>setError("Falha ao carregar os restaurantes"))
      .finally(()=> setLoading(false))
  },[]);
  if(loading)return (<Container><h3>Carregando...</h3></Container>);
  if(error)return (<Container><h3>{error}</h3></Container>);
  return (
    <Container>
      <ContainerListBistro>
        {bistros.map((bistro)=>
          <Bistro key={bistro.id}
            id={bistro.id}
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
