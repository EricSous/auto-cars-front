import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, share, tap } from 'rxjs';
import { UsuarioEntity } from '../request/user-entity';

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

  public update(
    userId: string,
    username: string,
    password: string
  ): Observable<any> {
    const url = `${this.apiUrl}/usuarios/${userId}`;
    const data = { username, password };
    return this.httpClient.put(url, data, this.httpOptions);
  }

  public delete(userId: string): Observable<any> {
    const url = `${this.apiUrl}/users/${userId}`;
    return this.httpClient.delete(url, this.httpOptions);
  }
}
