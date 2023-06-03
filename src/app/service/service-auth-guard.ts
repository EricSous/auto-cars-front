import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { CrudClientService } from './service-client';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  isAuthenticated: boolean = false;

  constructor(private router: Router, private service: CrudClientService) {}

  canActivate(): boolean {
    this.isAuthenticated = this.service.isAuthenticated;
    if (this.isAuthenticated) {
      localStorage.setItem('isAuthenticated', 'true');
      return true;
    } else {
      localStorage.removeItem('isAuthenticated');
      this.router.navigate(['/login']);
      return false;
    }
  }
}
