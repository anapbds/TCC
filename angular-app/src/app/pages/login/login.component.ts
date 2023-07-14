import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/users/shared/user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email!: string;
  password!: string;

  constructor(private userService: UserServiceService, private router: Router) {}

  async login(): Promise<void> {
    const inicio = Date.now();
    try {
      const user = await this.userService.login(this.email, this.password);
      // Lógica adicional após o login bem-sucedido, como redirecionar para outra página
      this.router.navigate(['/list']);
      const fim = Date.now();
      const tempoResposta = fim - inicio;
      console.log(`O tempo de resposta foi de ${tempoResposta} milissegundos.`);
      console.log('Login bem-sucedido!', user);
    } catch (error) {
      // Lidar com erros de login, como exibir uma mensagem de erro para o usuário
      console.error('Erro ao fazer login:', error);
    }
  }
  register(): void {
    const inicio = Date.now();
    this.userService.createUser(this.email, this.password)
      .then(() => {
        console.log('Usuário cadastrado com sucesso!');
        this.router.navigate(['/list']);

    const fim = Date.now();
    const tempoResposta = fim - inicio;
    console.log(`O tempo de resposta foi de ${tempoResposta} milissegundos.`);
      })
      .catch(error => {
        console.error('Erro ao cadastrar usuário:', error);
      });

  }
}
