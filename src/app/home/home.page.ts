import { Component } from '@angular/core';
import { Anotacao } from '../models/Anotacao';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  listaAnotacoes: Anotacao[] = [];

  constructor(private storageService: StorageService) {}

  async buscarUsuarios(){
    this.listaAnotacoes = await this.storageService.getAll();
  }

  ionViewDidEnter(){
    this.buscarUsuarios();
  }

  async excluirAnotacao(titulo: string){
    await this.storageService.remove(titulo);
    this.buscarUsuarios();
  }

}
