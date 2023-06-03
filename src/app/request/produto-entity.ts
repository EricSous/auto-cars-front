export interface ProdutoEntity {
  marca: string;
  modelo: string;
  ano: string;
  preco: number;
  descricao: string;
  file?: File | null;
  carroImageUrl?: string;
}
