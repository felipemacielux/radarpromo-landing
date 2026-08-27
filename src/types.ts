export interface Oferta {
  titulo: string;
  preco: string;
  preco_original: string;
  desconto: number;
  imagem: string;
  cupom: string;
  link: string;
  loja: string;
}

export interface OfertasData {
  atualizado_em: string;
  ofertas: Oferta[];
}
