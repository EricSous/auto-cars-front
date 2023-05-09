import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutosComponent } from './components/produtos/produtos.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './service/service-auth-guard';
import { CarrinhoDeComprasComponent } from './components/carrinho-de-compras/carrinho-de-compras.component';
import { AdicionarCarroComponent } from './components/adicionar-carro/adicionar-carro.component';
import { CadastrarUsuarioComponent } from './components/cadastrar-usuario/cadastrar-usuario.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'produto', component: ProdutosComponent },
  { path: 'carrinho', component: CarrinhoDeComprasComponent },
  { path: 'vender', component: AdicionarCarroComponent },
  { path: 'registrar', component: CadastrarUsuarioComponent },
  { path: '**', redirectTo: '/login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
