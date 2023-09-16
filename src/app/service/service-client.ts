import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { UsuarioEntity } from '../request/user-entity';
import { UsuarioEdit } from '../request/user-edit';

@Injectable()
export class CrudClientService {
  private readonly apiUrl = 'http://localhost:8080/api';

  constructor(private httpClient: HttpClient) {}

  public create(body: UsuarioEntity): Observable<any> {
    const url = `${this.apiUrl}/cadastrar`;
    return this.httpClient.post(url, body);
  }

  public login(login: string, password: string): Observable<any> {
    const url = `${this.apiUrl}/usuarios/${login}/${password}`;
    return this.httpClient.get(url);
  }

  public update(user: UsuarioEdit): Observable<any> {
    const url = `${this.apiUrl}/editar`;
    const data = user;
    return this.httpClient.put(url, data);
  }

  public delete(userId: string): Observable<any> {
    const url = `${this.apiUrl}/users/${userId}`;
    return this.httpClient.delete(url);
  }
}
