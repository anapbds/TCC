import { Component, OnInit, TemplateRef, Input } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Tarefa } from 'src/app/tarefas/shared/tarefa';
import { TarefaService } from 'src/app/tarefas/shared/tarefa.service';

@Component({
  selector: 'app-modal-atualizar',
  templateUrl: './modal-atualizar.component.html',
  styleUrls: ['./modal-atualizar.component.css']
})
export class ModalAtualizarComponent implements OnInit{
  modalRef!: BsModalRef;
  @Input() item!: Tarefa;
  constructor(private modalService: BsModalService, private tarefaService: TarefaService) {}

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  ngOnInit(): void {
  }

  updateItem(): void {
    const inicio = Date.now();
    if (!this.item || !this.item.key) {
      console.error('Item inválido para atualização');
      return;
    }
    this.tarefaService.update(this.item.key, this.item)
      .then(() => {
        const fim = Date.now();
        const tempoResposta = fim - inicio;
        console.log(`O tempo de resposta foi de ${tempoResposta} milissegundos.`);
        console.log('Atividade atualizada com sucesso!');
        this.modalRef.hide();
      })
      .catch(error => {
        console.error('Ocorreu um erro ao atualizar a atividade:', error);
      });
  }

}
