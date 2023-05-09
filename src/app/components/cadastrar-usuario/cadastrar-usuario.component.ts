import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-cadastrar-usuario',
  templateUrl: './cadastrar-usuario.component.html',
  styleUrls: ['./cadastrar-usuario.component.css'],
})
export class CadastrarUsuarioComponent {
  @Input() login: string = '';
  @Input() password: string = '';

  constructor(private appComponent: AppComponent, private router: Router) {}

  ngOnInit() {
    this.appComponent.esconderCabecalho();
  }

  registrar() {
    this.router.navigate(['/login']);
    console.log(this.login, this.password);
  }
}
