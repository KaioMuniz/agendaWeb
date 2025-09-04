import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root' // Torna o guard disponível para toda a aplicação
})
export class AuthGuard implements CanActivate {

  // Injeção de dependência do serviço de rotas
  constructor(private router: Router) {}

  // Método principal chamado sempre que uma rota protegida é acessada
  canActivate(): boolean {

    // 1. Tenta obter os dados de autenticação do sessionStorage
    const authData = sessionStorage.getItem('auth');

    // 2. Se não houver dados, redireciona para a tela de login
    if (!authData) {
      this.router.navigate(['/login/autenticar-usuario']);
      return false;
    }

    // 3. Converte a string JSON em objeto JavaScript
    const usuario = JSON.parse(authData);

    // 4. Verifica se o token e a data de expiração existem
    if (!usuario.accessToken || !usuario.dataHoraExpiracao) {
      sessionStorage.removeItem('auth'); // limpa dados inválidos
      this.router.navigate(['/login/autenticar-usuario']);
      return false;
    }

    // 5. Converte a data de expiração em um objeto Date
    const expiracao = new Date(usuario.dataHoraExpiracao);
    const agora = new Date(); // Pega a hora atual

    // 6. Se a hora atual for maior que a expiração, o token expirou
    if (agora > expiracao) {
      alert('Sessão expirada. Faça login novamente.');
      sessionStorage.removeItem('auth'); // limpa os dados da sessão
      this.router.navigate(['/login/autenticar-usuario']); // redireciona
      return false;
    }

    // 7. Caso todas as verificações passem, permite o acesso à rota
    return true;
  }
}
