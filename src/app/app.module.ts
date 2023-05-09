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
import { CrudClientService } from './service/service-produtos';
import { LoginComponent } from './components/login/login.component';
import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CadastrarUsuarioComponent,
    AdicionarCarroComponent,
    CarrinhoDeComprasComponent,
    ProdutosComponent,
    CabecalhoComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [CrudClientService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
