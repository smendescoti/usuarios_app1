import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/layout/navbar/navbar.component';
import { AutenticarComponent } from './components/pages/autenticar/autenticar.component';
import { CriarContaComponent } from './components/pages/criar-conta/criar-conta.component';
import { AtualizarDadosComponent } from './components/pages/atualizar-dados/atualizar-dados.component';
import { RecuperarSenhaComponent } from './components/pages/recuperar-senha/recuperar-senha.component';
import { RoutingModule } from './app.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgxSpinnerModule } from "ngx-spinner";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AutenticarComponent,
    CriarContaComponent,
    AtualizarDadosComponent,
    RecuperarSenhaComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
