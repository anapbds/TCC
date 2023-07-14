import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Tarefa } from './tarefa';

@Injectable({
  providedIn: 'root'
})
export class TarefaDataService {
  private tarefaSource = new BehaviorSubject({ tarefa: null, key: ''});
  currentTarefa = this.tarefaSource.asObservable();

  constructor() { }

  /*changeTarefa(tarefa: Tarefa, key: string) {
    this.tarefaSource.next({ tarefa: tarefa, key: key });
  }*/
}
