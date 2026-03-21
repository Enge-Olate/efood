import type { MenuItem } from "./types";

export const formatPrices = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(preco)
};

export const total = (items: MenuItem[]) => {
    return items.reduce((acc, item) => (acc += item.preco), 0);
  };

