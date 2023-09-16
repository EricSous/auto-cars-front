import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutosComponent } from './components/produtos/produtos.component';
import { LoginComponent } from './components/login/login.component';
import { CarrinhoDeComprasComponent } from './components/carrinho-de-compras/carrinho-de-compras.component';
import { AdicionarCarroComponent } from './components/adicionar-carro/adicionar-carro.component';
import { CadastrarUsuarioComponent } from './components/cadastrar-usuario/cadastrar-usuario.component';
import { EditarUserComponent } from './components/editar-user/editar-user.component';
import { AuthGuard } from './service/auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'produto', component: ProdutosComponent, canActivate: [AuthGuard] },
  {
    path: 'carrinho',
    component: CarrinhoDeComprasComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'vender',
    component: AdicionarCarroComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'registrar',
    component: CadastrarUsuarioComponent,
  },
  {
    path: 'editar',
    component: EditarUserComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
