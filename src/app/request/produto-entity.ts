export interface ProdutoEntity {
  marca: string;
  modelo: string;
  ano: string;
  preco: string;
  descricao: string;
  file?: File | null;
  carroImageUrl?: string;
}
