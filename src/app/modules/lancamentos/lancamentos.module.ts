import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LancamentoService } from 'src/app/core/services/http/lancamento.service';
import { LancamentoFormComponent } from './componentes/lancamento-form/lancamento-form.component';
import { LancamentoTableComponent } from './componentes/table/table.component';
import { LancamentoRoutingModule } from './lancamentos-routing.module';
import { CreateComponent } from './pages/create/create.component';
import { EditComponent } from './pages/edit/edit.component';
import { ListComponent } from './pages/list/list.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { CardsModule } from 'src/shared/components/cards/cards.module';
import { LancamentoFormBuilder } from './componentes/lancamento-form/lancamento.form-builder';
import {InputMaskModule} from 'primeng/inputmask';

@NgModule({
  declarations: [
    LancamentoFormComponent,
    LancamentoTableComponent,
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
    CardsModule,
    InputMaskModule
  ],
  providers: [
    LancamentoService,
    ConfirmationService,
    LancamentoFormBuilder,
    MessageService,
  ],
})
export class LancamentosModule {}
