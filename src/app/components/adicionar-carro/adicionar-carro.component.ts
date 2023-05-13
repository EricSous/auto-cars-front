class ImageSnippet {
  constructor(public src: string, public file: File) {}
}

import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ProdutoEntity } from 'src/app/request/produto-entity';
import { CrudProdutoService } from 'src/app/service/service-product';

@Component({
  selector: 'app-adicionar-carro',
  templateUrl: './adicionar-carro.component.html',
  styleUrls: ['./adicionar-carro.component.css'],
})
export class AdicionarCarroComponent {
  @Input() marca: string = '';
  @Input() modelo: string = '';
  @Input() ano: string = '';
  @Input() preco: string = '';
  @Input() descricao: string = '';
  @Input() file: File | null = null;

  selectedFile: ImageSnippet = new ImageSnippet('', new File([], ''));

  constructor(
    private produtoService: CrudProdutoService,
    private router: Router
  ) {}

  onFileChange(event: Event) {
    const fileInput = event.target as HTMLInputElement;
    const file = fileInput.files?.[0];
    this.file = file as File;
  }

  processFile(imageInput: any) {
    const file: File = imageInput.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', (event: any) => {
      this.selectedFile = new ImageSnippet(event.target.result, file);

      this.saveCar(this.selectedFile.file);
    });

    reader.readAsDataURL(file);
  }

  saveCar(imageInput?: any) {
    if (
      !this.marca ||
      !this.modelo ||
      !this.ano ||
      !this.preco ||
      !this.descricao
    ) {
      alert('Preencha todos os campos');
      return;
    }
    const formData = new FormData();
    formData.append('marca', this.marca);
    formData.append('modelo', this.modelo);
    formData.append('ano', this.ano);
    formData.append('preco', this.preco);
    formData.append('descricao', this.descricao);

    formData.append('file', imageInput);

    this.produtoService.adicionaProduto(formData).subscribe({
      next: () => {
        alert('Produto adicionado com sucesso');
        this.router.navigate(['/produto']);
      },
      error: () => {
        alert('Erro ao adicionar produto');
      },
    });
  }
}
