import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';


@Injectable()
export class UserDAO {
  constructor(private afAuth: AngularFireAuth) {}

  loginUser(email: string, password: string): Promise<any> {
    return this.afAuth.signInWithEmailAndPassword(email, password);
  }

  cadastrarUser(email: string, password: string): Promise<any> {
    return this.afAuth.createUserWithEmailAndPassword(email, password);
  }
}
