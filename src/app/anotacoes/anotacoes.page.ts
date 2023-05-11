import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-anotacoes',
  templateUrl: './anotacoes.page.html',
  styleUrls: ['./anotacoes.page.scss'],
})
export class AnotacoesPage implements OnInit {

  titulo = undefined;
  texto = undefined;

  constructor(public storage: Storage) { }

  ngOnInit() {
  }

  setTitulo(valor){
    this.titulo = valor;
  }
  setTexto(valor){
    this.texto = valor;
  }

  isEmpty(val): boolean {
    return !val;
  }

}
