import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produto } from './models/produto.model';
import { CompraRequest } from './models/compraRequest.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://localhost:7028';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Produto[]> {
    return this.http.get<Produto[]>(`${this.apiUrl}/Produtos`);
  }

  getOne(id: number): Observable<Produto> {
    return this.http.get<Produto>(`${this.apiUrl}/Produtos/${id}`);
  }

  getSearch(search: string): Observable<Produto[]> {
    return this.http.get<Produto[]>(`${this.apiUrl}/Produtos/busca/${search}`)
  }

  comprarProduto(compra: CompraRequest): Observable<any> {
    return this.http.post(`${this.apiUrl}/Produtos`, compra);
  }
  
}
