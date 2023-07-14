import { Injectable } from '@angular/core';

@Injectable()
export class UserFactory {
  createUser(email: string, password: string): any {
    return { email, password };
  }
}
