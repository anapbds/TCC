import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {
  private dbPath = '/tarefas';
  tarefasRef: AngularFireList<any>;

  constructor(private db: AngularFireDatabase) {
    this.tarefasRef = db.list(this.dbPath);
  }

  getAll(): AngularFireList<any> {
    return this.tarefasRef;
  }

  create(tarefa: any): any {
    const newItem = this.tarefasRef.push(tarefa);
    console.log('Novo item cadastrado:', newItem);
    return newItem;
  }

  update(key: string, value: any): Promise<void> {
    return this.tarefasRef.update(key, value);
  }

  delete(key: string): Promise<void> {
    return this.tarefasRef.remove(key);
  }
}
