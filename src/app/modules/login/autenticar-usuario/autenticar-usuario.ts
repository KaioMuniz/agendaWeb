import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-autenticar-usuario',
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './autenticar-usuario.html',
  styleUrl: './autenticar-usuario.css'
})
export class AutenticarUsuario {

  //atributos
  mensagemErro = signal('');

  //injeções de dependência
  fb = inject(FormBuilder);
  http = inject(HttpClient);
  router = inject(Router);

  //estrutura do formulário
  form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    senha: ['', [Validators.required, Validators.minLength(8)]]
  });

  //método para capturar o submit do formulário
  onSubmit() {

    //limpando mensagens
    this.mensagemErro.set('');

    //fazendo uma requisição HTTP POST para autenticar o usuário
    this.http.post(`${environment.apiUsuarios}/usuarios/autenticar`, this.form.value)
      .subscribe({ //aguardando a resposta da requisição
        next: (response: any) => { //capturando a resposta de sucesso
          //salvando os dados do usuário autenticado em uma sessão no navegador
          sessionStorage.setItem('auth', JSON.stringify(response));
          //redirecionar para a página do painel principal
          this.router.navigate(['/admin/painel-principal'])
            .then(() => { location.reload(); });            
        }, 
        error: (e) => { //capturando a resposta de erro
          this.mensagemErro.set(e.error[0]);
        } 
      })
  }

}
