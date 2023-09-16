import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Importe o Router
import { AuthService } from 'src/app/service/service-auth-guard';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.css'],
})
export class CabecalhoComponent {
  constructor(private auth: AuthService, private router: Router) {} // Corrija a injeção de dependência

  logout() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }
}
