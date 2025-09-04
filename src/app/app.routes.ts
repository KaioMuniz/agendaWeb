import { Routes } from '@angular/router';
import { CriarUsuario } from './modules/login/criar-usuario/criar-usuario';
import { AutenticarUsuario } from './modules/login/autenticar-usuario/autenticar-usuario';
import { PainelPrincipal } from './modules/admin/painel-principal/painel-principal';
import { CadastroTarefas } from './modules/admin/cadastro-tarefas/cadastro-tarefas';
import { ConsultaTarefas } from './modules/admin/consulta-tarefas/consulta-tarefas';
import { EdicaoTarefas } from './modules/admin/edicao-tarefas/edicao-tarefas';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
    {
        path: 'login/criar-usuario', component: CriarUsuario
    },
    {
        path: 'login/autenticar-usuario', component: AutenticarUsuario
    },
    {
        path: 'admin/painel-principal', component: PainelPrincipal, canActivate: [AuthGuard]
    },
    {
        path: 'admin/cadastro-tarefas', component: CadastroTarefas, canActivate: [AuthGuard]
    },
    {
        path: 'admin/consulta-tarefas', component: ConsultaTarefas, canActivate: [AuthGuard]
    },
    {
        path: 'admin/edicao-tarefas/:id', component: EdicaoTarefas, canActivate: [AuthGuard]
    },
    {
        path: '', redirectTo: '/login/autenticar-usuario', pathMatch: 'full'
    }
];
