import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CrudClientService } from 'src/app/service/service-produtos';
import { take } from 'rxjs/operators';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  @Input() login: string = '';
  @Input() password: string = '';

  constructor(
    private service: CrudClientService,
    private router: Router,
    private appComponent: AppComponent
  ) {}

  ngOnInit() {
    this.appComponent.esconderCabecalho();
  }
  logar() {
    this.service
      .read(this.login, this.password)
      .pipe(take(1))
      .subscribe({
        next: (login) => {
          if (login) {
            this.router.navigate(['/produtos']);
            console.log('logado');
          }
        },
        error: (erro) => {
          alert('Erro ao fazer login');
          console.error(erro);
        },
      });
  }
}
