import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { User } from 'src/app/users/shared/user';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private afAuth: AngularFireAuth) { }

  async createUser(email: string, password: string): Promise<User> {
    const credential = await this.afAuth.createUserWithEmailAndPassword(email, password);
    const user: User = {
      email: credential.user?.email || '',
      uid: credential.user?.uid || ''
      // Atributos adicionais do usuário, se necessário
    };
    return user;
  }

  async login(email: string, password: string): Promise<User> {
    const credential = await this.afAuth.signInWithEmailAndPassword(email, password);
    const user: User = {
      email: credential.user?.email || '',
      uid: credential.user?.uid || ''
      // Atributos adicionais do usuário, se necessário
    };
    return user;
  }

}
