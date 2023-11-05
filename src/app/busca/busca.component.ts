import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Produto } from '../services/models/produto.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-busca',
  templateUrl: './busca.component.html',
  styleUrls: ['./busca.component.scss'],
})
export class BuscaComponent implements OnInit {
  produtos: Produto[] = [];

  constructor(private apiSerive: ApiService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const busca = params['busca'];

      this.apiSerive.getSearch(busca).subscribe((data) => {
        console.log(data);
        this.produtos = data;
      });
    });
  }

  formatarMoeda(valor: number): string {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(valor);
  }
}
