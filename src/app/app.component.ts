import { ChangeDetectorRef, Component } from '@angular/core';
import { Usuario } from '../interface/usuario';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  mostrarCabecalho = true;

  constructor(
    private router: Router,
    private changeDetectorRef: ChangeDetectorRef
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
