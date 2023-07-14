import { Component, OnInit } from '@angular/core';
import { Tarefa } from 'src/app/tarefas/shared/tarefa';
import { TarefaService } from 'src/app/tarefas/shared/tarefa.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  tarefas: Tarefa[] = [];

  constructor(private tarefaService: TarefaService) {}

  ngOnInit(): void {
    this.carregarTarefas();
  }

  carregarTarefas(): void {
    this.tarefaService.getAll().snapshotChanges().pipe(
      map(changes => {
        return changes.map(c => ({
          key: c.payload.key,
          ...c.payload.val()
        }));
      })
    ).subscribe(tarefas => {
      this.tarefas = tarefas;
    });
  }
}
