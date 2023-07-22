import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { NgxSpinnerService } from 'ngx-spinner';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-criar-conta',
  templateUrl: './criar-conta.component.html',
  styleUrls: ['./criar-conta.component.css']
})
export class CriarContaComponent {

  //variáveis
  mensagem_sucesso: string = '';
  mensagem_erro: string = '';

  //construtor
  constructor(
    private httpClient: HttpClient,
    private spinner: NgxSpinnerService
  ){}

  //criando um formulário..
  formCriarConta = new FormGroup({
    //campo 'nome'
    nome: new FormControl('', [
      Validators.required, Validators.minLength(8)
    ]),
    //campo 'email'
    email: new FormControl('', [
      Validators.required, Validators.email
    ]),
    //campo 'senha'
    senha: new FormControl('', [
      Validators.required,
      Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}$/)
    ])
  });

  //função para acessar os campos do formulário
  //na página HTML e verificando se estão com erro
  get form(): any {
    return this.formCriarConta.controls;
  }

  //função para capturar o evento SUBMIT
  //do formulário
  onSubmit(): void {

    this.spinner.show();

    this.mensagem_sucesso = '';
    this.mensagem_erro = '';

    //fazendo uma requisição POST para a API
    this.httpClient.post(
      environment.apiUsuarios + '/criarconta',
      this.formCriarConta.value)
      .subscribe({
        next: (data: any) => { //capturando a resposta de sucesso
          this.mensagem_sucesso = data.mensagem;
          this.formCriarConta.reset(); //limpando o formulário
        },  
        error: (e) => { //capturando a resposta de erro
          this.mensagem_erro = e.error.Message;
          console.log(e.error);
        }
      })
      .add(() => {
        this.spinner.hide();
      })
  }

}
