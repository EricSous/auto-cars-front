import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { CrudProdutoService } from 'src/app/service/service-product';
import { CurrencyPipe } from '@angular/common';

class ImageSnippet {
  constructor(public src: string, public file: File) {}
}

@Component({
  selector: 'app-adicionar-carro',
  templateUrl: './adicionar-carro.component.html',
  styleUrls: ['./adicionar-carro.component.css'],
})
export class AdicionarCarroComponent {
  carroForm: FormGroup;
  formattedPrice: string = '';
  selectedFile: ImageSnippet = new ImageSnippet('', new File([], ''));

  constructor(
    private produtoService: CrudProdutoService,
    private router: Router,
    private fb: FormBuilder,
    private currencyPipe: CurrencyPipe
  ) {
    this.carroForm = this.fb.group({
      marca: ['', Validators.required],
      modelo: ['', Validators.required],
      ano: [
        '',
        [Validators.required, Validators.min(1990), Validators.max(2023)],
      ],
      preco: ['', [Validators.required, Validators.min(0.05)]],
      descricao: ['', Validators.required],
    });
  }

  formatPrice(event: any) {
    let numericValue = parseFloat(event.target.value.replace(/[^0-9]/g, ''));
    if (!isNaN(numericValue)) {
      numericValue /= 100; // Divide por 100 para lidar com centavos
      const formattedValue = numericValue.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      });
      this.formattedPrice = formattedValue;
      this.carroForm
        .get('preco')
        ?.setValue(numericValue.toFixed(2), { emitEvent: false });
    } else {
      this.formattedPrice = '';
      this.carroForm.get('preco')?.setValue('', { emitEvent: false });
    }
  }

  onFileChange(event: Event) {
    const fileInput = event.target as HTMLInputElement;
    const file = fileInput.files?.[0];
    if (file) {
      this.processFile(file);
    }
  }

  processFile(event: any) {
    const fileInput = event.target as HTMLInputElement;
    const file = fileInput.files?.[0];
    if (file) {
      const reader = new FileReader();

      reader.addEventListener('load', (event: any) => {
        this.selectedFile = new ImageSnippet(event.target.result, file);

        // Chame a função saveCar aqui, se necessário
        // this.saveCar(this.selectedFile.file);
      });

      reader.readAsDataURL(file);
    }
  }

  saveCar() {
    if (this.carroForm.invalid) {
      alert('Preencha todos os campos corretamente.');
      return;
    }

    const precoFormatted = parseFloat(
      this.carroForm.get('preco')?.value.replace(/[^0-9.]/g, '')
    );

    if (isNaN(precoFormatted)) {
      alert('Formato de preço inválido.');
      return;
    }

    // Agora, `precoFormatted` contém o valor como um número

    const formData = new FormData();
    formData.append('marca', this.carroForm.get('marca')?.value || '');
    formData.append('modelo', this.carroForm.get('modelo')?.value || '');
    formData.append('ano', this.carroForm.get('ano')?.value || '');
    formData.append('preco', precoFormatted.toString()); // Converte para string
    formData.append('descricao', this.carroForm.get('descricao')?.value || '');

    if (this.selectedFile.file) {
      formData.append('file', this.selectedFile.file);
    }

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
