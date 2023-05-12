import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-anotacoes',
  templateUrl: './anotacoes.page.html',
  styleUrls: ['./anotacoes.page.scss'],
})
export class AnotacoesPage implements OnInit {

  titulo = undefined;
  texto = undefined;

  constructor(public storage: Storage, private route: Router) { }

  ngOnInit() {
  }

  salvar(): any{
    if(this.isEmpty(this.titulo)){
      console.log('Vazio');
    } else {
      this.route.navigateByUrl('/home');
    }

  }

  setTitulo(){
    this.titulo = this.titulo;
  }
  setTexto(){
    this.texto = this.texto;
  }

  isEmpty(val: undefined): boolean {
    return !val;
  }


}
