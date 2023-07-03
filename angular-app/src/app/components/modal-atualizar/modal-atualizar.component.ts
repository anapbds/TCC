import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-modal-atualizar',
  templateUrl: './modal-atualizar.component.html',
  styleUrls: ['./modal-atualizar.component.css']
})
export class ModalAtualizarComponent implements OnInit{
  modalRef!: BsModalRef;
  constructor(private modalService: BsModalService) {}

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  closeModal(){
    /*const modelDiv = document.getElementById('janelaModal');
    if(modelDiv != null){
      modelDiv.style.display = 'none';
    }*/
  }

  ngOnInit(): void {
  }


}
