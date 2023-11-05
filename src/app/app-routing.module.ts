import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaProdutoComponent } from './pagina-produto/pagina-produto.component';
import { HomeComponent } from './home/home.component';
import { BuscaComponent } from './busca/busca.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'detalhes/:id', component: PaginaProdutoComponent },
  { path: 'busca/:busca', component: BuscaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
