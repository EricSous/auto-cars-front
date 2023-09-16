import { ChangeDetectorRef, Component } from '@angular/core';
import { Usuario } from '../interface/usuario';
import { NavigationEnd, Router } from '@angular/router';
import { AuthService } from './service/service-auth-guard';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  mostrarCabecalho = true;

  constructor(
    private router: Router,
    private changeDetectorRef: ChangeDetectorRef,
    private auth: AuthService
  ) {}

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (event.url == '/login' || event.url == '/cadastro') {
          this.esconderCabecalho();
          this.changeDetectorRef.detectChanges();
        } else {
          this.mostrarCabecalho = true;
          this.changeDetectorRef.detectChanges();
        }
      }
    });
  }

  esconderCabecalho() {
    this.mostrarCabecalho = false;
  }
}
