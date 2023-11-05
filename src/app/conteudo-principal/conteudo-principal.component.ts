import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Produto } from '../services/models/produto.model';

@Component({
  selector: 'app-conteudo-principal',
  templateUrl: './conteudo-principal.component.html',
  styleUrls: ['./conteudo-principal.component.scss'],
})
export class ConteudoPrincipalComponent implements OnInit {
  produtos: Produto[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getAll().subscribe((data) => {
      console.log('Dados recebidos:', data);
      this.produtos = data;
    });
  }

  formatarMoeda(valor: number): string {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(valor);
  }
}
