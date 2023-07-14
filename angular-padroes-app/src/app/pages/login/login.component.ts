import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataBuilder } from '../../Builder/DataBuilder.service';
import { DataFactory } from '../../Factory/DataFactory.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email!: string;
  password!: string;

  constructor(private dataBuilder: DataBuilder, private dataFactory: DataFactory, private router: Router) {}

  async login(): Promise<void> {
    const inicio = Date.now();
    try {
      const builder = this.dataBuilder.userBuilder();
      const factory = this.dataFactory.userFactory(this.email, this.password, 'user');
      builder.loginBuilder(factory.email, factory.password);
      // Lógica adicional após o login bem-sucedido, como redirecionar para outra página
      this.router.navigate(['/list']);
      console.log('Login bem-sucedido!');
      const fim = Date.now();
      const tempoResposta = fim - inicio;
      console.log(`O tempo de resposta foi de ${tempoResposta} milissegundos.`);
    } catch (error) {
      // Lidar com erros de login, como exibir uma mensagem de erro para o usuário
      console.error('Erro ao fazer login:', error);
    }
  }

  register(): void {
    const inicio = Date.now();
    try {
      const builder = this.dataBuilder.userBuilder();
      const factory = this.dataFactory.userFactory(this.email, this.password, 'user');
      builder.cadastrarBuilder(factory.email, factory.password);
      // Lógica adicional após o cadastro bem-sucedido, como redirecionar para outra página
      this.router.navigate(['/list']);
      console.log('Usuário cadastrado com sucesso!');
      const fim = Date.now();
      const tempoResposta = fim - inicio;
      console.log(`O tempo de resposta foi de ${tempoResposta} milissegundos.`);
    } catch (error) {
      // Lidar com erros de cadastro, como exibir uma mensagem de erro para o usuário
      console.error('Erro ao cadastrar usuário:', error);
    }
  }
}
