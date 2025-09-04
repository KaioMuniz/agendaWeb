import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {

  //Atributos
  nomeUsuario = signal('');
  emailUsuario = signal('');

  //Injeção de dependência
  router = inject(Router);

  //Evento executado no momento em que a página é aberta
  ngOnInit() {
    //capturar os dados do usuário autenticado na sessão
    const auth = sessionStorage.getItem('auth') as string;
    const usuario = JSON.parse(auth);

    //capturando o nome e o email do usuário
    this.nomeUsuario.set(usuario.nome);
    this.emailUsuario.set(usuario.email);
  }

  //Função para logout do usuário
  logout() {
    if(confirm('Deseja realmente sair do sistema?')) {
      //apagar os dados gravados na sessão
      sessionStorage.removeItem('auth');
      //redirecionar para a página de autenticação
      this.router.navigate(['/login/autenticar-usuario'])
        .then(() => { location.reload() });
    }
  }
}
