import { NgModule, createComponent } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LancamentoListComponent } from './componentes/lancamento-list/lancamento-list.component';
import { CreateComponent } from './pages/create/create.component';
import { EditComponent } from './pages/edit/edit.component';

const routes: Routes = [
  {
    path: '',
    component: LancamentoListComponent,
  },
  {
    path: 'cadastro',
    component: CreateComponent,
  },
  {
    path: 'cadastro/:id',
    component: EditComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LancamentoRoutingModule {}
