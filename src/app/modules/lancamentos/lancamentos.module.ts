import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LancamentoFormComponent } from './componentes/lancamento-form/lancamento-form.component';
import { LancamentoListComponent } from './componentes/lancamento-list/lancamento-list.component';
import { CreateComponent } from './pages/create/create.component';
import { EditComponent } from './pages/edit/edit.component';
import { ListComponent } from './pages/list/list.component';
import { LancamentoRoutingModule } from './lancamentos-routing.module';
import { LancamentoService } from 'src/app/core/services/http/lancamento.service';

import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LancamentoFormComponent,
    LancamentoListComponent,
    CreateComponent,
    EditComponent,
    ListComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    LancamentoRoutingModule,
    TableModule,
    ButtonModule,
    ToastModule,
    MessagesModule,
    MessageModule,
    ConfirmDialogModule,
    InputNumberModule,
    InputTextModule,
    CalendarModule,
    InputTextareaModule,
    DropdownModule,
    FormsModule,
  ],
  providers: [LancamentoService],
})
export class LancamentosModule {}
