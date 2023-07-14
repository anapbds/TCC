import { Component, OnInit, TemplateRef, Input } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Tarefa } from 'src/app/tarefas/shared/tarefa';
import { TarefaService } from 'src/app/tarefas/shared/tarefa.service';

@Component({
  selector: 'app-modal-excluir',
  templateUrl: './modal-excluir.component.html',
  styleUrls: ['./modal-excluir.component.css']
})

export class ModalExcluirComponent implements OnInit {
  modalRef!: BsModalRef;
  @Input() item?: Tarefa;

  constructor(private modalService: BsModalService, private tarefaService: TarefaService) {}

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  ngOnInit(): void {}

  deleteItem(): void {
    const inicio = Date.now();
    if (!this.item || !this.item.key) {
      console.error('Item inválido para exclusão');
      return;
    }
    this.tarefaService.delete(this.item.key)
      .then(() => {
        console.log('Atividade excluída com sucesso!');
        this.modalRef.hide();
        const fim = Date.now();
        const tempoResposta = fim - inicio;
        console.log(`O tempo de resposta foi de ${tempoResposta} milissegundos.`);
      })
      .catch(error => {
        console.error('Ocorreu um erro ao excluir a atividade:', error);
      });


  }
}
