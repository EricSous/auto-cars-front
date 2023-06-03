export interface Produto {
  id: number;
  marca: string;
  modelo: string;
  ano: string;
  preco: number;
  descricao: string;
  file: string;
  carroImageUrl?: string;
}
