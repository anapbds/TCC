import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { User } from 'src/app/users/shared/user';


@Injectable({
  providedIn: 'root'
})
export class DataFactory {

  userFactory(email: string ,password: string, type: string){
    let factory: any = {};

    if(type === 'user'){
        factory.email = email;
        factory.password = password;
    }

    if(type === 'dev'){
        factory.email = email;
        factory.password = password;
    }

    return factory;
  }

}
