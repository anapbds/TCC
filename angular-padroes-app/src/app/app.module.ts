import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModalAtualizarComponent } from './components/modal-atualizar/modal-atualizar.component';
import { ModalCadastroComponent } from './components/modal-cadastro/modal-cadastro.component';
import { ModalExcluirComponent } from './components/modal-excluir/modal-excluir.component';
import { ListComponent } from './pages/list/list.component';
import { LoginComponent } from './pages/login/login.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule, BsModalService } from 'ngx-bootstrap/modal';
import { AlertModule,AlertConfig } from 'ngx-bootstrap/alert';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { TarefaService } from './tarefas/shared/tarefa.service';
import { UserServiceService } from './users/shared/user-service.service';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { environment } from 'src/environments/environment';
import { TaskDAO } from './tarefas/shared/tarefa.dao';
import { DataBuilder } from './Builder/DataBuilder.service';
import { DataFactory } from './Factory/DataFactory.service';


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
    BrowserModule,
    AlertModule,
    ButtonsModule,
    RouterModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [AlertConfig, BsModalService, TarefaService, UserServiceService, TaskDAO, DataBuilder, DataFactory],
  bootstrap: [AppComponent]
})
export class AppModule { }
