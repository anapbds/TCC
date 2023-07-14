import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { Tarefa } from './tarefa';

@Injectable()
export class TaskDAO {
  private tarefasRef: AngularFireList<Tarefa>;

  constructor(private db: AngularFireDatabase) {
    this.tarefasRef = this.db.list<Tarefa>('tarefas');
  }

  getAllTarefas(): AngularFireList<Tarefa> {
    return this.tarefasRef;
  }

  getTarefaById(id: string): AngularFireList<Tarefa> {
    return this.db.list<Tarefa>('tarefas', (ref) => ref.orderByChild('id').equalTo(id));
  }

  createTarefa(tarefa: Tarefa): Promise<any> {
    return new Promise((resolve, reject) => {
      this.tarefasRef.push(tarefa)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });

  }

  updateTarefa(id: string, tarefa: Tarefa): Promise<any> {
    return this.tarefasRef.update(id, tarefa);
  }

  deleteTarefa(id: string): Promise<any> {
    return this.tarefasRef.remove(id);
  }
}
