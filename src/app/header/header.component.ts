import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  imgUrl: string = "../../assets/logo.png"

  busca: string = ''

  constructor(private router: Router) {}

  buscarProdutos() {
    if(this.busca) {
      this.router.navigate(['/busca', this.busca]);
    }
  }

  recarregarPagina() {
    setTimeout( () => {
      location.reload()
    }, 1)
  }  
}
