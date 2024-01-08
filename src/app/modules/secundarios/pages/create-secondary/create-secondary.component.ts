import { Component, OnInit } from '@angular/core';
import { Form, FormGroup } from '@angular/forms';
import { SecundarioFormBuilder } from '../../components/secundario-form/secundario-form.form-builder';
import { SecondaryUtilsService } from 'src/app/core/services/utils/secondary.utils.service';
import {
  ISecundarioDTO,
  ISecundarioForm,
  TabelaSecundaria,
  temCodigo,
} from 'src/app/core/models/secundario-form.model';
import { HttpErrorResponse } from '@angular/common/http';
import { MessageService } from 'primeng/api';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-secondary',
  templateUrl: './create-secondary.component.html',
  styleUrls: ['./create-secondary.component.scss'],
  providers: [SecundarioFormBuilder, SecondaryUtilsService],
})
export class CreateSecondaryComponent {
  public formGroup: FormGroup | null = null;

  constructor(
    private formBuilder: SecundarioFormBuilder,
    private secundarioService: SecondaryUtilsService,
    private messageService: MessageService,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe((params) => {
      const tabela = params['tabela'] as TabelaSecundaria;
      const tabelaTemCodigo = temCodigo[tabela];
      this.formGroup = this.formBuilder.build(tabelaTemCodigo);
    });
  }

  handleSubmit({
    tabela,
    item,
  }: {
    tabela: TabelaSecundaria;
    item: ISecundarioDTO;
  }) {
    this.secundarioService.criarItem(tabela, item).subscribe(
      () => {
        this.formGroup?.reset();
        this.handleSuccess();
      },
      (err) => this.handleError(err)
    );
  }

  handleSuccess() {
    this.messageService.add({
      severity: 'success',
      summary: 'Sucesso',
      detail: 'Lançamento adicionado com sucesso!',
      life: 3000,
    });
  }

  handleError(error: HttpErrorResponse) {
    this.messageService.add({
      severity: 'error',
      summary: 'Erro',
      detail: error.message,
      life: 3000,
    });
  }
}
