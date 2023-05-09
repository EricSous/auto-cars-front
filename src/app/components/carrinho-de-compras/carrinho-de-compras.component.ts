import { Component } from '@angular/core';

@Component({
  selector: 'app-carrinho-de-compras',
  templateUrl: './carrinho-de-compras.component.html',
  styleUrls: ['./carrinho-de-compras.component.css'],
})
export class CarrinhoDeComprasComponent {
  carros = [
    {
      modelo: 'Gol',
      marca: 'Volkswagen',
      ano: 2021,
      preco: 50000,
      imagem:
        'https://www.vw.com.br/content/dam/vw-ngw/vw_pkw/importers/br/showrooms/gol/downloads/vw-br-gol-life-01.jpg',
    },
    {
      modelo: 'Corolla',
      marca: 'Toyota',
      ano: 2022,
      preco: 90000,
      imagem:
        'https://s3.amazonaws.com/toyota.site.toyota-v5/tci-prod/toyota/media/pages/models/corolla/2022/highlights/21-22-toy-cars-corolla-mmp-0049-hr.jpg',
    },
    {
      modelo: 'Onix',
      marca: 'Chevrolet',
      ano: 2021,
      preco: 55000,
      imagem:
        'https://www.chevrolet.com.br/content/dam/chevrolet/brasil/desktop/all-models/cars/onix-sedan/gallery/03-images/chevrolet-onix-sedan-gallery-01.jpg?imwidth=960',
    },
    {
      modelo: 'Civic',
      marca: 'Honda',
      ano: 2022,
      preco: 95000,
      imagem:
        'https://hondaestadodeminas.com.br/wp-content/uploads/2022/01/002-55.jpg',
    },
  ];
  total = 0;

  ngOnInit() {
    this.total = this.carros.reduce((total, carro) => total + carro.preco, 0);
  }

  removerCarros(carro: any) {
    this.total -= carro.preco;
    const index = this.carros.indexOf(carro);
    this.carros.splice(index, 1);
  }

  finalizarCompra() {
    alert('Compra finalizada com sucesso!');
  }
}
