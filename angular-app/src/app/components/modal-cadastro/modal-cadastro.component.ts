import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { TarefaService } from 'src/app/tarefas/shared/tarefa.service';


@Component({
  selector: 'app-modal-cadastro',
  templateUrl: './modal-cadastro.component.html',
  styleUrls: ['./modal-cadastro.component.css']
})

export class ModalCadastroComponent implements OnInit {
  modalRef!: BsModalRef;
  itemList: any[] = [];
  selectedItem: any;
  key?: string | null;
  date?: string;
  description?: string;
  time?: string;
  title?: string;

  constructor(private modalService: BsModalService, private TarefaService: TarefaService) {}

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  ngOnInit(): void {
    this.TarefaService.getAll().valueChanges().subscribe(items => {
      this.itemList = items;
    });
  }

  addItem(): void {
    const inicio = Date.now();
    if (!this.title || !this.description || !this.date || !this.time) {
      console.log('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    const newItem = {
      title: this.title,
      description: this.description,
      date: this.date,
      time: this.time
    };

    this.TarefaService.create(newItem)
      .then(() => {
        console.log('Atividade cadastrada com sucesso!');
        this.modalRef.hide(); // Fecha o modal após cadastrar a atividade
        this.title = '';
        this.description = '';
        this.date = '';
        this.time = '';
        const fim = Date.now();
        const tempoResposta = fim - inicio;
        console.log(`O tempo de resposta foi de ${tempoResposta} milissegundos.`);
      })
      .catch((error: any) => {
        console.error('Ocorreu um erro ao cadastrar a atividade:', error);
      });


  }
}
