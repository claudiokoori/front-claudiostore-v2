import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ConteudoPrincipalComponent } from './conteudo-principal/conteudo-principal.component';
import { PaginaProdutoComponent } from './pagina-produto/pagina-produto.component';
import { HomeComponent } from './home/home.component';
import { BuscaComponent } from './busca/busca.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ConteudoPrincipalComponent,
    PaginaProdutoComponent,
    HomeComponent,
    BuscaComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
