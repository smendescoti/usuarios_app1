import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutenticarComponent } from './components/pages/autenticar/autenticar.component';
import { CriarContaComponent } from './components/pages/criar-conta/criar-conta.component';
import { RecuperarSenhaComponent } from './components/pages/recuperar-senha/recuperar-senha.component';
import { AtualizarDadosComponent } from './components/pages/atualizar-dados/atualizar-dados.component';
import { AuthGuard } from './guards/auth.guard';

//mapeando as rotas de navegação
const routes: Routes = [
  { path: 'pages/autenticar', component: AutenticarComponent },
  { path: 'pages/criar-conta', component: CriarContaComponent },
  { path: 'pages/recuperar-senha', component: RecuperarSenhaComponent },
  { path: 'pages/atualizar-dados', component: AtualizarDadosComponent, canActivate: [AuthGuard] },
  { path: '', pathMatch: 'full', redirectTo: '/pages/autenticar' },
];

//exportando a configuração
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RoutingModule {}
