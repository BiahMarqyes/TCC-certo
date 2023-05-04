import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Anotacao } from '../models/Anotacao';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-anotacoes',
  templateUrl: './anotacoes.page.html',
  styleUrls: ['./anotacoes.page.scss'],
})
export class AnotacoesPage implements OnInit {

  formAnotacao: FormGroup;
  anotacao: Anotacao = new Anotacao();

  mensagens = {
    titulo: [
      { tipo: 'required', mensagem: 'Dê um título à sua anotação' },
    ],
    texto: [
      { tipo: 'required', mensagem: 'Escreva um texto para salvar' },
    ],
  };

  constructor(private formBuilder: FormBuilder, private storageService: StorageService, private route: Router) {
    this.formAnotacao = this.formBuilder.group({
      titulo: ['', Validators.compose([Validators.required])],
      texto: ['', Validators.compose([Validators.required])],
    });
  }

  ngOnInit() {
  }

  async salvarAnotacao() {
    if(this.formAnotacao.valid){
      this.anotacao.titulo = this.formAnotacao.value.titulo;
      this.anotacao.texto = this.formAnotacao.value.texto;
      await this.storageService.set(this.anotacao.titulo, this.anotacao);
      this.route.navigateByUrl('/home');
    }else{
      alert('Não foi possivel salvar esta anotação!');
    }
  }

}
