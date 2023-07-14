import { Injectable } from '@angular/core';
import { UserDAO } from './user.dao';
import { UserFactory } from './user.factory';

@Injectable()
export class UserBuilder {
  constructor(private userDAO: UserDAO, private userFactory: UserFactory) {}

  loginBuilder(email: string, password: string): Promise<any> {
    const user = this.userFactory.createUser(email, password);
    return this.userDAO.loginUser(user.email, user.password);
  }

  cadastrarBuilder(email: string, password: string): Promise<any> {
    const user = this.userFactory.createUser(email, password);
    return this.userDAO.cadastrarUser(user.email, user.password);
  }
}
