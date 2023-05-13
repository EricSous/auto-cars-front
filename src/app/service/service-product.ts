class ImageSnippet {
  constructor(public src: string, public file: File) {}
}

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProdutoEntity } from '../request/produto-entity';
import { Produto } from '../request/produto-dto-file';

@Injectable()
export class CrudProdutoService {
  private readonly apiUrl = 'http://localhost:8080/produto';
  private readonly httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private httpClient: HttpClient) {}

  getProduto(): Observable<Produto[]> {
    const url = `${this.apiUrl}/getProduto`;
    return this.httpClient.get<Produto[]>(url);
  }

  adicionaProduto(
    produto: ProdutoEntity | FormData
  ): Observable<ProdutoEntity> {
    const url = `${this.apiUrl}/adicionaProduto`;
    return this.httpClient.post<ProdutoEntity>(url, produto);
  }

  public deletarProduto(id: number): Observable<any> {
    const url = `${this.apiUrl}/deletarProduto/${id}`;
    return this.httpClient.delete(url);
  }

  public atualizaProduto(produto: ProdutoEntity): Observable<ProdutoEntity> {
    const url = `${this.apiUrl}/atualizaProduto`;
    return this.httpClient.put<ProdutoEntity>(url, produto, this.httpOptions);
  }
}
