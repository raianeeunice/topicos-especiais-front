import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {
  ISecundarioForm,
  TabelaSecundaria,
  temCodigo,
} from 'src/app/core/models/secundario-form.model';
import { SecondaryUtilsService } from 'src/app/core/services/utils/secondary.utils.service';
import { SecundarioListFormBuilder } from './list.form-builder';
import { selectionOptionsSecundario } from '../../utils/option-table.selection';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  providers: [SecondaryUtilsService, SecundarioListFormBuilder],
})
export class ListComponent implements OnInit {
  public formGroup: FormGroup | null = null;

  public selectionOptionsSecundario = selectionOptionsSecundario;

  public items: ISecundarioForm[] = [];

  public temCodigo: boolean = true;

  constructor(
    private secundarioListFormBuilder: SecundarioListFormBuilder,
    private secondaryUtilsService: SecondaryUtilsService,
    private route: Router,
    private messageService: MessageService
  ) {
    this.formGroup = this.secundarioListFormBuilder.build();
  }

  ngOnInit(): void {}

  public getAllItens() {
    const tabela = this.formGroup?.get('tabela')?.value as TabelaSecundaria;
    if (!tabela) {
      return;
    }
    this.temCodigo = temCodigo[tabela];
    this.secondaryUtilsService.getItens(tabela).subscribe((data) => {
      this.items = data;
    });
  }

  public goToCreate() {
    this.route.navigate([
      'secundario',
      'cadastro',
      this.formGroup?.get('tabela')?.value,
    ]);
  }

  goToEdit(id: string) {
    this.route.navigate([
      'secundario',
      'cadastro',
      this.formGroup?.get('tabela')?.value,
      id,
    ]);
  }

  handleDelete(id: string) {
    this.secondaryUtilsService
      .deletarItem(this.formGroup?.get('tabela')?.value, id)
      .subscribe(() => {
        this.getAllItens();
        this.messageService.add({
          severity: 'success',
          summary: 'Sucesso',
          detail: 'Item excluído com sucesso',
        });
      });
  }
}
