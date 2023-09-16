import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CrudClientService } from 'src/app/service/service-client';
import { take } from 'rxjs/operators';
import { AppComponent } from 'src/app/app.component';
import { AuthService } from 'src/app/service/service-auth-guard';
import { UsuarioEntity } from 'src/app/request/user-entity';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  @Input() login: string = '';
  @Input() password: string = '';

  constructor(
    private authService: CrudClientService,
    private router: Router,
    private appComponent: AppComponent,
    private authGuard: AuthService
  ) {}

  ngOnInit() {
    // Esconder o cabeçalho ao entrar na página de login
    this.appComponent.esconderCabecalho();
  }

  logar() {
    // Chamar o serviço de autenticação para fazer login
    try {
      var dataDado: UsuarioEntity = {
        login: this.login,
        senha: this.password,
      };
      // Envie os dados para o login e aguarde a resolução da promessa
      this.authGuard
        .login(dataDado)
        .then((res) => {
          // Salve os dados do usuário logado
          this.authGuard.setLoggedUser(res);

          // Exiba os dados para conferência
          console.log('res', res);

          // Navegue para outra página
          this.router.navigate(['/produto']);
        })
        .catch((error) => {
          // Exiba o erro caso ocorra
          console.log('error', error);

          // Exiba um alerta para o usuário.
          alert(
            'Não foi possível efetuar login. Verifique os dados e tente novamente.'
          );
        });
    } catch (error) {
      // Lida com erros síncronos aqui
      console.error('Erro síncrono:', error);
    }
  }
}
