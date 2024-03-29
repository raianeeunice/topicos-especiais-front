import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'lancamento',
    loadChildren: () =>
      import('./modules/lancamentos/lancamentos.module').then(
        (p) => p.LancamentosModule
      ),
  },
  {
    path: 'secundario',
    loadChildren: () =>
      import('./modules/secundarios/secundarios.module').then(
        (p) => p.SecundariosModule
      ),
  },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
