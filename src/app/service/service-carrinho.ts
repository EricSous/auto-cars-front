import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Produto {
  id: number;
  marca: string;
  modelo: string;
  ano: string;
  preco: number;
  descricao: string;
  file: string;
}

@Injectable({
  providedIn: 'root',
})
export class CarrinhoService {
  private baseUrl = 'http://localhost:8080/carrinho';

  constructor(private http: HttpClient) {}

  getProdutos(userId: number): Observable<Produto[]> {
    return this.http.get<Produto[]>(
      `${this.baseUrl}/getProduto?UserId=${userId}`
    );
  }

  adicionaProduto(userId: number, produtoId: number): Observable<any> {
    return this.http.post(
      `${this.baseUrl}/adicionaCarrinho?userId=${userId}&produtoId=${produtoId}`,
      null
    );
  }

  deletaCarrinho(idCarro: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/deleta?idCarro=${idCarro}`);
  }
}
