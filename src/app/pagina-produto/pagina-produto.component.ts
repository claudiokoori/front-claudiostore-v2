import { Component, OnInit } from '@angular/core';
import { Produto } from '../services/models/produto.model';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';
import { CompraRequest } from '../services/models/compraRequest.model';

@Component({
  selector: 'app-pagina-produto',
  templateUrl: './pagina-produto.component.html',
  styleUrls: ['./pagina-produto.component.scss']
})
export class PaginaProdutoComponent implements OnInit {
  produto: Produto | undefined;
  
 
  quantidade: number = 1;
  valorTotal: number = 0;

  constructor(private route: ActivatedRoute, private apiService: ApiService) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const productId = +params['id'];
      console.log('ID do produto:', productId);

      this.apiService.getOne(productId).subscribe((data) => {
        this.produto = data;

        this.calcularValorTotal();
      });
    });
  }

  calcularValorTotal() {
    if (this.produto && this.quantidade > 0) {
      this.valorTotal = this.produto.preco * this.quantidade;
    }
  }

  formatarMoeda(valor: number): string {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valor);
  }
 
  confirmarCompra() {
    const compra: CompraRequest = {
      id: this.produto?.id || 0,
      quantidade: this.quantidade,
    };
    
    this.apiService.comprarProduto(compra).subscribe(
      (resposta) => {
      
        console.log('Compra efetuada com sucesso!', resposta, compra);
        alert("Parabéns por sua compra, venha sempre comprar na CLAUDIO!STORE");
        location.reload();
      })
  } 
}
