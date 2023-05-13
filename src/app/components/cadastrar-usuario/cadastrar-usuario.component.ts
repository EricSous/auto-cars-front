import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { UsuarioEntity } from 'src/app/request/user-entity';
import { CrudClientService } from 'src/app/service/service-client';

@Component({
  selector: 'app-cadastrar-usuario',
  templateUrl: './cadastrar-usuario.component.html',
  styleUrls: ['./cadastrar-usuario.component.css'],
})
export class CadastrarUsuarioComponent {
  @Input() login: string = '';
  @Input() password: string = '';

  usuario: UsuarioEntity = {
    login: '',
    senha: '',
  };

  constructor(
    private appComponent: AppComponent,
    private router: Router,
    private serivceUser: CrudClientService
  ) {}

  ngOnInit() {
    this.appComponent.esconderCabecalho();
  }

  registrar() {
    this.usuario = {
      login: this.login,
      senha: this.password,
    };
    this.serivceUser.create(this.usuario).subscribe(
      () => {
        this.router.navigate(['/login']);
      },
      (error) => {
        console.log(error);
      }
    );

    console.log(this.login, this.password);
  }
}
