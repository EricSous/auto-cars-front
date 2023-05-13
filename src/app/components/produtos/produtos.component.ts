import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/request/produto-dto-file';
import { ProdutoEntity } from 'src/app/request/produto-entity';
import { CrudProdutoService } from 'src/app/service/service-product';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css'],
})
export class ProdutosComponent implements OnInit {
  carros: Produto[] = [];
  imagemUrl: string = '';
  imageData: any;

  constructor(private produtoService: CrudProdutoService) {}

  ngOnInit(): void {
    this.getProdutos();
  }

  getProdutos() {
    this.produtoService.getProduto().subscribe(
      (produtos: Produto[]) => {
        this.carros = produtos;
      },
      (error) => {
        console.log('Erro ao obter os produtos:', error);
      }
    );
  }

  getImagemSrc(carro: Produto): any {
    return (this.imageData = 'data:image/jpeg;base64,' + carro.file);
  }

  comprarCarro(carro: Produto) {
    alert(
      `Você comprou o ${carro.modelo} da marca ${carro.marca} por ${carro.preco}`
    );
  }
}
