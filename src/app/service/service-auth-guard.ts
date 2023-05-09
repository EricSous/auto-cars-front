import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { CrudClientService } from './service-produtos';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private service: CrudClientService) {}

  canActivate(): boolean {
    const isAuthenticated = this.service.isAuthenticated;
    if (isAuthenticated) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
