import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateSecondaryComponent } from './pages/create-secondary/create-secondary.component';
import { SecundarioRoutingModule } from './secundarios-routing.module';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { ListComponent } from './pages/list/list.component';
import { SecundarioFormComponent } from './components/secundario-form/secundario-form.component';
import { EditComponent } from './pages/edit/edit.component';
import { ConfirmationService, MessageService } from 'primeng/api';

@NgModule({
  declarations: [
    CreateSecondaryComponent,
    ListComponent,
    SecundarioFormComponent,
    EditComponent,
  ],
  imports: [
    CommonModule,
    SecundarioRoutingModule,
    ReactiveFormsModule,
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
  providers: [MessageService, ConfirmationService],
})
export class SecundariosModule {}
