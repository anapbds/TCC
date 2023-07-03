import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAtualizarComponent } from './modal-atualizar.component';

describe('ModalAtualizarComponent', () => {
  let component: ModalAtualizarComponent;
  let fixture: ComponentFixture<ModalAtualizarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAtualizarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalAtualizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
