import { NgModule, createComponent } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateSecondaryComponent } from './pages/create-secondary/create-secondary.component';
import { ListComponent } from './pages/list/list.component';
import { EditComponent } from './pages/edit/edit.component';

const routes: Routes = [
  {
    path: '',
    component: ListComponent,
  },
  {
    path: 'cadastro/:tabela/:id',
    component: EditComponent,
  },
  {
    path: 'cadastro/:tabela',
    component: CreateSecondaryComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SecundarioRoutingModule {}
