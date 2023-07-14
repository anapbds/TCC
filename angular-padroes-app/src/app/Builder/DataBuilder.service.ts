import { UserController } from '../users/shared/user.controller';
import { UserServiceService } from "../users/shared/user-service.service";
import { Injectable } from '@angular/core';

@Injectable()
export class DataBuilder {
  private userController: UserController;

  constructor(userService: UserServiceService) {
    this.userController = new UserController(userService);
  }

  userBuilder() {
    const loginBuilder = (email: string, password: string) => {
      this.userController.loginUser(email, password);
    };

    const cadastrarBuilder = (email: string, password: string) => {
      this.userController.cadastrarUser(email, password);
    };

    return {
      loginBuilder,
      cadastrarBuilder
    };
  }
}
