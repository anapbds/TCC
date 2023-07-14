import { Injectable } from '@angular/core';
import { UserServiceService } from './user-service.service';

@Injectable()
export class UserController {
  constructor(private userService: UserServiceService) {}

  loginUser(email: string, password: string): void {
    this.userService.login(email, password)
      .then((user) => {
        // Lógica de redirecionamento ou manipulação de dados após o login
      })
      .catch((error) => {
        // Tratamento de erro
      });
  }

  cadastrarUser(email: string, password: string): void {
    this.userService.createUser(email, password)
      .then((user) => {
        // Lógica de redirecionamento ou manipulação de dados após o cadastro
      })
      .catch((error) => {
        // Tratamento de erro
      });
  }
}
