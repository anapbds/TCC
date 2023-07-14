import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { TaskDAO } from './tarefa.dao';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {
  private dbPath = '/tarefas';
  tarefasDAO: TaskDAO;

  constructor(private db: AngularFireDatabase) {
    this.tarefasDAO = new TaskDAO(db);
  }

  getAll(): AngularFireList<any> {
    return this.tarefasDAO.getAllTarefas();
  }

  create(tarefa: any): any {
    return this.tarefasDAO.createTarefa(tarefa);
  }

  update(key: string, value: any): Promise<void> {
    return this.tarefasDAO.updateTarefa(key, value);
  }

  delete(key: string): Promise<void> {
    return this.tarefasDAO.deleteTarefa(key);
  }
}
