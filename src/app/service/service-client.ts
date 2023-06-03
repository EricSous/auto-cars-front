import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, share, tap } from 'rxjs';
import { UsuarioEntity } from '../request/user-entity';
import { UsuarioEdit } from '../request/user-edit';

@Injectable()
export class CrudClientService {
  private readonly apiUrl = 'http://localhost:8080/api';
  private readonly httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  isAuthenticated: boolean = false;

  constructor(private httpClient: HttpClient) {}

  public create(body: UsuarioEntity): Observable<any> {
    const url = `${this.apiUrl}/cadastrar`;
    return this.httpClient.post(url, body, this.httpOptions);
  }

  public read(login: string, password: string): Observable<any> {
    const url = `${this.apiUrl}/usuarios/${login}/${password}`;
    return this.httpClient.get(url, this.httpOptions).pipe(
      tap(() => (this.isAuthenticated = true)),
      share()
    );
  }

  public update(user: UsuarioEdit): Observable<any> {
    console.log(user);
    const url = `${this.apiUrl}/editar`;
    const data = user;
    return this.httpClient.put(url, data, this.httpOptions);
  }

  public delete(userId: string): Observable<any> {
    const url = `${this.apiUrl}/users/${userId}`;
    return this.httpClient.delete(url, this.httpOptions);
  }
}
