import { Component, OnInit } from '@angular/core';
import { decrypt } from 'src/app/helpers/crypto.helper';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  //variáveis
  isAuthenticated: boolean = false;
  nomeUsuario: string = '';
  emailUsuario: string = '';

  ngOnInit(): void {
    //capturando o conteudo da local storage
    let auth = localStorage.getItem('auth');
    //verificando se algum conteudo foi obtido
    if(auth != null) {
      //descriptografando o conteudo
      let data = JSON.parse(decrypt(auth));
      this.isAuthenticated = true;
      this.nomeUsuario = data.nome;
      this.emailUsuario = data.email;
    }
  }

  logout(): void {
    if(window.confirm('Deseja realmente sair do sistema?')) {
      //limpar o conteudo da local storage
      localStorage.removeItem('auth');
      //redirecionar de volta para a página de autenticação
      window.location.href = '/pages/autenticar';
    }
  }
}
