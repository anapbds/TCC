import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModalAtualizarComponent } from './components/modal-atualizar/modal-atualizar.component';
import { ModalCadastroComponent } from './components/modal-cadastro/modal-cadastro.component';
import { ModalExcluirComponent } from './components/modal-excluir/modal-excluir.component';
import { ListComponent } from './pages/list/list.component';
import { LoginComponent } from './pages/login/login.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule, BsModalService } from 'ngx-bootstrap/modal';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { AlertModule,AlertConfig } from 'ngx-bootstrap/alert';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getDatabase, provideDatabase, Database, DataSnapshot } from '@angular/fire/database';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { TarefaService } from './tarefas/shared/tarefa.service';

const firebaseConfig = {
  apiKey: "AIzaSyBCQ-xusg0Wl49wIbw6L1BQN-2RQBxUuHQ",
  authDomain: "gestao-tarefas-fd276.firebaseapp.com",
  databaseURL: "https://gestao-tarefas-fd276-default-rtdb.firebaseio.com",
  projectId: "gestao-tarefas-fd276",
  storageBucket: "gestao-tarefas-fd276.appspot.com",
  messagingSenderId: "560218250951",
  appId: "1:560218250951:web:2356dfeb93aa54613268e2"
};

@NgModule({
  declarations: [
    AppComponent,
    ModalAtualizarComponent,
    ModalCadastroComponent,
    ModalExcluirComponent,
    ListComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    TooltipModule.forRoot(),
    ModalModule,
    BrowserAnimationsModule,
    BrowserModule,
    AccordionModule,
    AlertModule,
    ButtonsModule,
    FormsModule,
    ModalModule,
    RouterModule,
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideDatabase(() => getDatabase()),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [AlertConfig, BsModalService, TarefaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
