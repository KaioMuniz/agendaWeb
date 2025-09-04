import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { environment } from '../../../../environments/environment';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-criar-usuario',
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './criar-usuario.html',
  styleUrl: './criar-usuario.css'
})
export class CriarUsuario {

  //atributos
  mensagemSucesso = signal('');
  mensagemErro = signal('');

  //injeções de dependência
  fb = inject(FormBuilder);
  http = inject(HttpClient);
  
  //estrutura do formulário
  form = this.fb.group({
    nome: ['', [
      Validators.required, Validators.minLength(8)]
    ],
    email: ['', [
      Validators.required, Validators.email]
    ],
    senha: ['', [
      Validators.required, 
      Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/)
      ]
    ],
    senhaConfirmacao : ['', [
      Validators.required
    ]]
  });

  //função para capturar o submit do formulário
  onSubmit() {

    //limpar as mensagens da página
    this.mensagemSucesso.set('');
    this.mensagemErro.set('');

    //verificando se as senhas estão iguais
    if(this.form.value.senha != this.form.value.senhaConfirmacao) {
      this.mensagemErro.set('Senhas não conferem, por favor verifique.');
      return;
    }

    //enviando uma requisição para a API cadastrar o usuário
    this.http.post(`${environment.apiUsuarios}/usuarios/criar`, this.form.value)
      .subscribe({ //aguardando o retorno da API
        next: (response: any) => { //capturando resposta de sucesso
          this.mensagemSucesso.set(response.mensagem); //exibindo mensagem de sucesso
          this.form.reset(); //limpando os campos do formulário
        },
        error: (e) => { //capturando resposta de erro
          this.mensagemErro.set(e.error[0]);
        }
      })
  }
}
