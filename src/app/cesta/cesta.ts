import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cesta } from '../model/cesta';
import { Produto } from '../model/produto';

@Component({
  imports: [CommonModule],
  selector: 'app-cesta-detalhe',
  styleUrl: './cesta.css',
  templateUrl: './cesta.html',
})
export class CestaDetalhe {
  mensagem: string = ""; 
  cesta: Cesta = new Cesta(null); 
  

  ngOnInit() {
    let json = localStorage.getItem("cesta");

    this.cesta = new Cesta(json);

    if (this.cesta.itens.length === 0) {
        this.mensagem = "Sua cesta esta vazia!";
    } else {
        this.mensagem = "";
    }
}


  limpar(){
    localStorage.removeItem("cesta");
    location.href="./promo";
  }

  remover(p: Produto) {
    this.cesta.removerItem(p);

    localStorage.setItem("cesta", JSON.stringify(this.cesta));

    if (this.cesta.itens.length === 0) {
        this.mensagem = "Sua cesta esta vazia!";
    }
}



}
