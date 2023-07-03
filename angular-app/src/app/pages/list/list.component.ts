import { Component, OnInit } from '@angular/core';
import { Tarefa } from 'src/app/tarefas/shared/tarefa';
import { TarefaService } from 'src/app/tarefas/shared/tarefa.service';

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
    this.tarefaService.getAll().valueChanges().subscribe(tarefas => {
      this.tarefas = tarefas;
    });
  }
}
