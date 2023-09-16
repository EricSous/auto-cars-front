import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastrarUsuarioComponent } from './components/cadastrar-usuario/cadastrar-usuario.component';
import { AdicionarCarroComponent } from './components/adicionar-carro/adicionar-carro.component';
import { CarrinhoDeComprasComponent } from './components/carrinho-de-compras/carrinho-de-compras.component';
import { ProdutosComponent } from './components/produtos/produtos.component';
import { CabecalhoComponent } from './components/cabecalho/cabecalho.component';
import { CrudClientService } from './service/service-client';
import { LoginComponent } from './components/login/login.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CrudProdutoService } from './service/service-product';
import { EditarUserComponent } from './components/editar-user/editar-user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CurrencyPipe } from '@angular/common';
import { CurrencyFormatDirective } from './directives/currency-format.directive';
import { AuthService } from './service/service-auth-guard';
import { AuthGuard } from './service/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    CadastrarUsuarioComponent,
    AdicionarCarroComponent,
    CarrinhoDeComprasComponent,
    ProdutosComponent,
    CabecalhoComponent,
    LoginComponent,
    EditarUserComponent,
    CurrencyFormatDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  providers: [
    CrudClientService,
    HttpClient,
    CrudProdutoService,
    CurrencyPipe,
    AuthService,
    AuthGuard,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
