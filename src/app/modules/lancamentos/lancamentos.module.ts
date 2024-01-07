import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LancamentoFormComponent } from './componentes/lancamento-form/lancamento-form.component';
import { LancamentoListComponent } from './componentes/lancamento-list/lancamento-list.component';
import { CreateComponent } from './pages/create/create.component';
import { EditComponent } from './pages/edit/edit.component';
import { ListComponent } from './pages/list/list.component';



@NgModule({
  declarations: [
    LancamentoFormComponent,
    LancamentoListComponent,
    CreateComponent,
    EditComponent,
    ListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LancamentosModule { }
