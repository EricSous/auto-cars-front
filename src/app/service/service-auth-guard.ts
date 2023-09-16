import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioEntity } from '../request/user-entity';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl: string = 'http://localhost:8080/api';

  constructor(private httpClient: HttpClient) {}

  // Função que efetua o login
  async login(data: UsuarioEntity): Promise<any> {
    const url = `${this.apiUrl}/login`;
    const response = await firstValueFrom(this.httpClient.post(url, data));
    return response;
  }
  // Função para salvar os dados do usuário logado
  setLoggedUser(data: UsuarioEntity) {
    try {
      let userDataString = JSON.stringify(data);
      localStorage.setItem('loggedUser', userDataString);
    } catch (error) {
      console.log(error);
    }
  }

  getLoggedUser() {
    try {
      let userDataString = localStorage.getItem('loggedUser');
      let userData = JSON.parse(userDataString ? userDataString : '');
      return userData;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
}
