import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { NgxSpinnerService } from 'ngx-spinner';
import { environment } from 'src/environments/environment';
import { encrypt } from 'src/app/helpers/crypto.helper';

@Component({
  selector: 'app-autenticar',
  templateUrl: './autenticar.component.html',
  styleUrls: ['./autenticar.component.css']
})
export class AutenticarComponent {

  //variáveis
  mensagem_erro: string = '';

  //construtor
  constructor(
    private httpClient: HttpClient,
    private spinner: NgxSpinnerService 
  ){
    this.spinner.show();
    if(localStorage.getItem('auth') != null) {
      window.location.href = '/pages/atualizar-dados';
    }
    this.spinner.hide();
  }

  //estrutura do formulário
  formAutenticar = new FormGroup({
    //campo 'email'
    email: new FormControl('', [
      Validators.required, 
      Validators.email]),
    //campo 'senha'
    senha: new FormControl('', [
      Validators.required, 
      Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}$/)])
  });

  //função para acessar os campos do formulário
  //e exibir mensagens de erro de validação
  get form(): any {
    return this.formAutenticar.controls;
  }

  //função para capturar o evento SUBMIT
  //do formulário
  onSubmit(): void {
    
    this.spinner.show();

    this.httpClient.post(environment.apiUsuarios + "/autenticar", this.formAutenticar.value)
      .subscribe({
        next: (data: any) => {
          //salvar os dados obtidos na local storage
          localStorage.setItem('auth', encrypt(JSON.stringify(data)));
          //redirecionar o usuário para a página de edição de dados
          window.location.href = "/pages/atualizar-dados";
        },
        error: (e) => {
          this.mensagem_erro = e.error.Message;
        }
      })
      .add(() => {
        this.spinner.hide();
      });
  }
}
