import { Component, DoCheck, OnInit } from '@angular/core';
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
import { ConfirmationService, MessageService } from 'primeng/api';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  providers: [SecondaryUtilsService, SecundarioListFormBuilder],
})
export class ListComponent implements OnInit {
  public formGroup: FormGroup | null = null;
  public items: ISecundarioForm[] = [];
  public selectionOptionsSecundario = selectionOptionsSecundario;
  public temCodigo: boolean = true;
  public nomeTabela: string = '';
  lastFilterTag: string = 'last_table_click';

  constructor(
    private secundarioListFormBuilder: SecundarioListFormBuilder,
    private secondaryUtilsService: SecondaryUtilsService,
    private route: Router,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {
    this.formGroup = this.secundarioListFormBuilder.build();
  }

  ngOnInit(): void {
    const tabela = JSON.parse(localStorage.getItem(this.lastFilterTag) || '');
    if (tabela) {
      this.getAllItems(tabela);
    }
  }

  public getAllItems(value?: string): void {
    let tabela: TabelaSecundaria;

    if (value) {
      tabela = value as TabelaSecundaria;
      this.formGroup?.get('tabela')?.setValue(tabela);
    } else {
      tabela = this.formGroup?.get('tabela')?.value as TabelaSecundaria;
      if (!tabela) {
        return;
      }
      localStorage.setItem(this.lastFilterTag, JSON.stringify(tabela));
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
    const tabela = this.formGroup?.get('tabela')?.value;
    this.route.navigate(['secundario', 'cadastro', tabela, id]);
  }

  public handleDelete(item: ISecundarioForm) {
    this.confirmationService.confirm({
      message: `Você tem certeza que deseja deletar o lançamento:
        "${item.nome}"?`,
      header: 'Confirmar exclusão',
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: 'Sim',
      rejectLabel: 'Não',
      acceptButtonStyleClass: 'p-button-success',
      rejectButtonStyleClass: 'p-button-danger',
      accept: () => {
        this.secondaryUtilsService
          .deletarItem(this.formGroup?.get('tabela')?.value, item.id)
          .subscribe({
            next: () => this.handleSuccess(),
            error: (err) => this.handleError(err),
          });
      },
    });
  }

  public handleBack() {
    this.route.navigate(['/lancamento']);
  }

  private handleSuccess() {
    this.getAllItems();
    this.messageService.add({
      severity: 'success',
      summary: 'Sucesso',
      detail: 'Item excluído com sucesso',
    });
  }

  private handleError(error: HttpErrorResponse) {
    this.messageService.add({
      severity: 'error',
      summary: 'Erro',
      detail: error.message,
      life: 3000,
    });
  }
}
