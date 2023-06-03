import { Component } from '@angular/core';
import { Produto } from 'src/app/request/produto-dto-file';
import { CarrinhoService } from 'src/app/service/service-carrinho';

@Component({
  selector: 'app-carrinho-de-compras',
  templateUrl: './carrinho-de-compras.component.html',
  styleUrls: ['./carrinho-de-compras.component.css'],
})
export class CarrinhoDeComprasComponent {
  carros: any[] = [];
  total = 0;
  imageData: any;

  constructor(private carrinhoService: CarrinhoService) {}

  ngOnInit(): void {
    this.carrinhoService.getProdutos(1).subscribe((carros) => {
      this.carros = carros;
      carros.forEach((carro) => {
        this.total += carro.preco;
      });
    });
  }

  removerCarros(carro: any) {
    console.log(carro);
    this.carrinhoService.deletaCarrinho(carro.id).subscribe(() => {
      alert('Carro removido com sucesso!');
      window.location.reload();
    });
  }

  finalizarCompra() {
    alert('Compra finalizada com sucesso!');
  }

  getImagemSrc(carro: Produto): any {
    return (this.imageData = 'data:image/jpeg;base64,' + carro.file);
  }
}
